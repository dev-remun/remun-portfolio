import Tag from "./Tag";

const ProfileCard = () => {
    return (
        <div className="flex gap-x-[60px] max-w-[880px] w-full">
            {/* Profile Picture */}
            <img src="/remun_pic_1.jpg" width={160} height={160} className="rounded-[20px] shadow-lg"/>

            {/* Profile Information */}
            <div className="flex flex-col justify-center gap-y-[24px]">
                <div className="flex flex-col">
                    <h1 className="font-[inter-bold] text-[#103D62] text-[20px]">Raymond C. Balingbing</h1>
                    <p className="font-[inter-regular] text-[#8D8D8D] text-[14px]">Tabaco City, Albay, PH</p>
                </div>

                <div className="flex flex-col">
                    <h2 className="font-[inter-medium] text-[#103D62] text-[16px]">Bachelor of Science in Computer Science</h2>
                    <p className="font-[inter-regular] text-[#8D8D8D] text-[14px]">Bicol University, College of Science</p>
                </div>

                <div className="flex gap-x-[12px]">
                    <Tag tag_name={"Lorem Ipsum"} />
                    <Tag tag_name={"Lorem Ipsum"} />
                </div>
                
            </div>
        </div>
    );
}

export default ProfileCard;