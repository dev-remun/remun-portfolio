
import { useState } from "react";

const ProfileCard = () => {

    const [is_flip, setIsFlip] = useState(false);

    const flipMeFunction = () => {
        setIsFlip(!is_flip);
    }

    return(
        <div className="max-w-[1000px] w-full flex flex-col gap-x-10 bg-gray-200 md:flex-row">
            <div className="max-w-[400px] flex justify-center">
                <img src="/ascii-art_remun.png" className="" />
                <button className="absolute border rounded-sm h-fit bg-white py-1 px-4 hover:cursor-pointer">
                    flip me!
                </button>
            </div>

            <div className="py-10">
                <h1 className="font-[inter-bold] text-xl mb-4">hi! im mond</h1>
                <p className="font-[inter-regular] text-xs text-gray-600">20 M Albay</p>
                <p className="font-[inter-regular] text-xs text-gray-600">i do software dev and ml projects</p>
                <p className="font-[inter-regular] text-xs text-gray-600">i dont use arch btw and i hate linkedin</p>
                <p className="font-[inter-regular] text-xs text-gray-600">im a comscie student at bicol university, college of science</p>
            </div>
        </div>
    );
}

export default ProfileCard;