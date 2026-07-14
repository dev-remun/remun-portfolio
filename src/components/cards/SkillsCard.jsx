
import IconSkill from "../icons/IconSkill";

const SkillsCard = () => {
    return (
        <div className="w-full md:max-w-[1000px] px-[24px] py-[24px] md:px-[24px] md:py-[24px] rounded-[10px] shadow-md bg-[#FDFDFD] mb-[40px]">
            <h2 className="font-[inter-bold] text-[#103D62] text-[14px] md:text-[16px] md:mb-[12px] mb-[12px]">Skills</h2>

            {/* Skills */}
            <div className="flex flex-col md:gap-y-[40px] gap-y-[28px]">

                <div className="flex flex-col gap-y-[10px]">
                    <h3 className="font-[inter-medium] text-[#103D62]/80 text-[12px] md:text-[15px]">Programming Languages</h3>
                    <div className="flex gap-x-[20px] gap-y-[10px] items-between flex-wrap">
                        <IconSkill icon={"/JavaScript.svg"} name={"JavaScript"} />
                        <IconSkill icon={"/TypeScript.svg"} name={"TypeScript"} />
                        <IconSkill icon={"/Java.svg"} name={"Java"} />
                        <IconSkill icon={"/Python.svg"} name={"Python"} />
                        <IconSkill icon={"/R.svg"} name={"R"} />
                        <IconSkill icon={"/C.svg"} name={"C"} />
                    </div>
                </div>

                <div className="flex flex-col gap-y-[10px]">
                    <h3 className="font-[inter-medium] text-[#103D62]/80 text-[12px] md:text-[15px]">Frontend Development</h3>
                    <div className="flex gap-x-[20px] gap-y-[10px] items-between flex-wrap">
                        <IconSkill icon={"/Figma.svg"} name={"Figma"} />
                        <IconSkill icon={"/React.svg"} name={"React"} />
                        <IconSkill icon={"/Vue.svg"} name={"Vue"} />
                        <IconSkill icon={"/Vite.svg"} name={"Vite"} />
                        <IconSkill icon={"/Tailwind_CSS.svg"} name={"Tailwind"} />
                        <IconSkill icon={"/Bootstrap.svg"} name={"Bootstrap"} />
                        <IconSkill icon={"/HTML5.svg"} name={"HTML5"} />
                        <IconSkill icon={"/CSS3.svg"} name={"CSS3"} />
                    </div>
                </div>

                <div className="flex flex-col gap-y-[10px]">
                    <h3 className="font-[inter-medium] text-[#103D62]/80 text-[12px] md:text-[15px]">Backend Development</h3>
                    <div className="flex gap-x-[20px] gap-y-[10px] items-between flex-wrap">
                        <IconSkill icon={"/PHP.svg"} name={"PHP"} />
                        <IconSkill icon={"/Laravel.svg"} name={"Laravel"} />
                        <IconSkill icon={"/Express.svg"} name={"Express"} />
                        <IconSkill icon={"/Node.svg"} name={"Node JS"} />
                        <IconSkill icon={"/MySQL.svg"} name={"MySQL"} />
                        <IconSkill icon={"/MongoDB.svg"} name={"MongoDB"} />
                    </div>
                </div>

                <div className="flex flex-col gap-y-[10px]">
                    <h3 className="font-[inter-medium] text-[#103D62]/80 text-[12px] md:text-[15px]">Mobile Development</h3>
                    <div className="flex gap-x-[20px] gap-y-[10px] items-between flex-wrap">
                        <IconSkill icon={"/Kotlin.svg"} name={"Kotlin"} />
                        <IconSkill icon={"/Android_Studio.svg"} name={"Android Studio"} />
                    </div>
                </div>

                <div className="flex flex-col gap-y-[10px]">
                    <h3 className="font-[inter-medium] text-[#103D62]/80 text-[12px] md:text-[15px]">CI/CD and Cloud</h3>
                    <div className="flex gap-x-[20px] gap-y-[10px] items-between flex-wrap">
                        <IconSkill icon={"/AWS.svg"} name={"AWS"} />
                        <IconSkill icon={"/GitHub.svg"} name={"GitHub"} />
                        <IconSkill icon={"/GitHub_Actions.svg"} name={"GitHub Actions"} />
                        <IconSkill icon={"/Git.svg"} name={"Git"} />
                        <IconSkill icon={"/Vercel.svg"} name={"Vercel"} />
                        <IconSkill icon={"/NGINX.svg"} name={"NGINX"} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SkillsCard;``