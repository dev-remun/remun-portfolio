
import { useState, useRef, useLayoutEffect } from 'react';
import Tag from './Tag';

interface TagData {
    tag_name: string;
    color: string;
}

interface TagContainerProps {
    tags: TagData[];
}

export default function TagContainer({ tags }: TagContainerProps) {
    const container_reference = useRef<HTMLDivElement>(null);
    const [visible_count, setVisibleCount] = useState(tags.length);
    const [show_popup, setShowPopup] = useState(false);

    useLayoutEffect(() => {
        const calculateFits = () => {
            if (!container_reference.current) return;

            const container_width = container_reference.current.clientWidth;
            const children = Array.from(container_reference.current.children);

            let current_width = 0;
            let count = 0;
            const gap = 16; // 16px equals same with gpa-x04
            const plus_button_width = 46; // # estimated width of the "+X" tag

            for (let i = 0; i < children.length; i++) {
              const childWidth = (children[i] as HTMLElement).offsetWidth;

              // # if it's the very last tag, we don't need room for the "+X" button
              const widthNeeded = i === children.length - 1 
                  ? current_width + childWidth 
                  : current_width + childWidth + gap + plus_button_width;

              if (widthNeeded > container_width) {
                break; // # stop counting, it doesn't fit
              }

              current_width += childWidth + gap;
              count++;
            }

          setVisibleCount(count);
        };

        // # run on mount and whenever the window resizes
        calculateFits();
        window.addEventListener('resize', calculateFits);
        return () => window.removeEventListener('resize', calculateFits);
    }, [tags]);

  const hidden_tags = tags.slice(visible_count);

  return (
    <div className="relative w-full mt-4">
      
        {/* 1. INVISIBLE MEASURING ROWW */}
        <div 
            ref={container_reference} 
            className="flex gap-x-4 absolute top-0 left-0 w-full invisible pointer-events-none opacity-0"
        >
            {tags.map((tag, index) => (
                <div key={`measure-${index}`} className="flex-shrink-0">
                    <Tag tag_name={tag.tag_name} color={tag.color} />
                </div>
            ))}
        </div>

        {/* 2. VISIBLE ROW */}
        <div className="flex gap-x-4 relative items-center">
            {tags.slice(0, visible_count).map((tag, index) => (
                <Tag key={`visible-${index}`} tag_name={tag.tag_name} color={tag.color} />
            ))}

            {/* 3. THE "+X" BUTTON AND POPUP */}
            {hidden_tags.length > 0 && (
                <div className="relative flex-shrink-0">
                    <button 
                        onClick={() => setShowPopup(!show_popup)}
                        onBlur={() => setTimeout(() => setShowPopup(false), 150)} // # close when clicking away
                        className="focus:outline-none hover:opacity-80 transition-opacity"
                    >
                        <Tag tag_name={`+${hidden_tags.length}`} color="" />
                    </button>

                    {show_popup && (
                        <div className="absolute top-full mt-2 right-0 bg-white rounded shadow-lg p-3 z-50 flex flex-wrap gap-2 w-max max-w-[280px]">
                            {hidden_tags.map((tag, index) => (
                                <Tag key={`hidden-${index}`} tag_name={tag.tag_name} color={tag.color} />
                            ))}
                        </div>
                    )}
                </div>
            )}
        </div>  
    </div>
  );
}
