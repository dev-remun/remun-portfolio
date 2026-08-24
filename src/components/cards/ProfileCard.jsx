
import { useState  } from "react";

import { CircleArrowUp } from 'lucide-react';

import TagContainer from "../tags/TagContainer";
import Card from "../templates/Card";
import SocialLink from "../links/SocialLink";

const ProfileCard = () => {

    // # generates text
    const portrait_text = "mond".repeat(2500); 

    const [is_flipped, setIsFlipped] = useState(false);

    const tags = [
        { tag_name: "Laravel", color: "red" },
        { tag_name: "Vue", color: "green" },
        { tag_name: "Postgres", color: "orange" },
        { tag_name: "PHP", color: "blue" },
        { tag_name: "YOLOv11", color: "yellow" },
        { tag_name: "MobileNetV3", color: "red" },
    ];

    return(
        <div className="max-w-[1000px] w-full flex flex-col gap-x-10 md:flex-row">

            <div className="max-w-[400px] flex justify-center relative">

                <div className="w-[300px] h-[400px] rounded-lg border border-gray-200 relative overflow-hidden bg-white">
                    
                    <div 
                        className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${is_flipped ? 'opacity-0' : 'opacity-100'}`}
                    >
                        <p className="h-full text-[10px] leading-[10px] font-mono break-all text-justify bg-[url('/remun_v2.png')] bg-[100%_100%] bg-no-repeat bg-clip-text text-transparent cursor-default select-none">
                            {portrait_text}
                        </p>
                    </div>
                    
                    <div 
                        className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${is_flipped ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                    >
                        <img 
                            src="/remun_v2.png" 
                            alt="portrait" 
                            className="w-full h-full object-cover" 
                        />
                    </div>

                </div>
                <CircleArrowUp
                    className={`absolute hover:cursor-pointer ${is_flipped ? 'text-white' : 'text-black'} `}
                    onClick={() => setIsFlipped(!is_flipped)}
                />
            </div>

            {/* # details container */}
            <Card className="flex flex-col gap-y-2 p-4 md:p-6 max-w-[600px]">
                <h1 className="font-[archivo] text-[28px] mb-4">hi! im mond</h1>
                <p className="font-[inter-regular] text-sm text-gray-600 md:text-base">20 M Albay</p>
                <p className="font-[inter-regular] text-sm text-gray-600 md:text-base">i do software dev and ml projects</p>
                <p className="font-[inter-regular] text-sm text-gray-600 md:text-base">comscie student at bicol university</p>
                <p className="font-[inter-regular] text-sm text-gray-600 md:text-base">i dont use arch btw and i hate linkedin</p>

                <div className="flex gap-x-4 mt-4">
                    <SocialLink href="https://github.com/dev-remun">Github</SocialLink>
                    <SocialLink href="https://www.facebook.com/ray.cabarlo">Facebook</SocialLink>
                    <SocialLink href="https://mail.google.com/mail/?view=cm&fs=1&to=rcb2023-9793-64187@bicol-u.edu.ph">Email</SocialLink>
                    <SocialLink href="/resume/BALINGBING - Resume.pdf">Resume</SocialLink>
                </div>

                <div className="flex gap-x-4 mt-4">
                    <TagContainer tags={tags} />
                </div>
            </Card>

            
        </div>
    );
}

export default ProfileCard;