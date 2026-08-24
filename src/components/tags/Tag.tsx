
interface TagProps {
    color: string,
    tag_name: string
}

const Tag = ({ color, tag_name } : TagProps) => {

    const tag_color = (() => {

        switch(color) {
            case "blue":
                return 'bg-[#b3aef9] text-[#333062]';
            case "red":
                return 'bg-[#f9b2b2] text-[#623035]';
            case "orange":
                return 'bg-[#f9ccae] text-[#624630]';
            case "yellow":
                return 'bg-[#f9e8ae] text-[#625630]';
            case "green":
                return 'bg-[#b5e8c1] text-[#32593b]';
            default:
                return 'bg-gray-200 text-gray-800'; 
        }


    })();

    const tag_final_class = tag_color + ' px-2.5 py-1 rounded-full font-[inter-regular] text-xs md:text-sm lg:text-sm cursor-pointer';

    return(
        <div className={tag_final_class}>
            {tag_name}
        </div>
    );

}

export default Tag;