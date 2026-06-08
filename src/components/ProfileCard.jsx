import Tag from "./Tag";

const ProfileCard = () => {
    return (
        <div className="flex flex-col md:flex-row items-center md:items-start md:pl-[64px] text-center md:text-left gap-y-[24px] md:gap-y-0 gap-x-[60px] max-w-[880px] w-full px-[20px] md:px-0">
            {/* Profile Picture */}
            <img src="/remun_pic_1.jpg" className="w-[120px] md:w-[160px] h-[120px] md:h-[160px] rounded-[20px] shadow-lg object-cover" alt="Profile" />

            {/* Profile Information */}
            <div className="flex flex-col justify-center items-center md:items-start gap-y-[16px] md:gap-y-[24px]">
                <div className="flex flex-col">
                    <h1 className="font-[inter-bold] text-[#103D62] text-[18px] md:text-[20px]">Raymond C. Balingbing</h1>
                    <p className="font-[inter-regular] text-[#8D8D8D] text-[12px] md:text-[14px]">Tabaco City, Albay, PH</p>
                </div>

                <div className="flex flex-col">
                    <h2 className="font-[inter-medium] text-[#103D62] text-[14px] md:text-[16px]">Bachelor of Science in Computer Science</h2>
                    <p className="font-[inter-regular] text-[#8D8D8D] text-[12px] md:text-[14px]">Bicol University, College of Science</p>
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