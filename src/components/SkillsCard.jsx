import "../App.css"
const SkillsCard = () => {
    return (
        <div className="w-full max-w-[1000px] flex flex-col items-center">
            <div className="carousel w-full max-w-[1000px] flex items-center overflow-x-auto gap-x-[60px] px-[24px] py-[24px] border-t-[1px] border-b-[1px] border-[#A6A6A6] mb-[20px]">
                <div className="w-[200px] spacer"></div>
                <div className="group flex gap-x-[60px] items-center justify-center">
                    <SkillBox icon={"/figma_icon.svg"} />
                    <SkillBox icon={"/vscode_icon.svg"} />
                    <SkillBox icon={"/typescript_icon.svg"} />
                    <SkillBox icon={"/react_icon.svg"} />
                    <SkillBox icon={"/python_icon.svg"} />
                    <SkillBox icon={"/aws_icon.svg"} />
                    <SkillBox icon={"/mysql_icon.svg"} />
                    <SkillBox icon={"/expressjs_icon.svg"} />
                    <SkillBox icon={"/nodejs_icon.svg"} />
                    <SkillBox icon={"/kotlin_icon.svg"} />
                    <SkillBox icon={"/androidstudio_icon.svg"} />
                </div>

                <div aria-hidden className="group flex gap-x-[60px] items-center justify-center">
                    <SkillBox icon={"/figma_icon.svg"} />
                    <SkillBox icon={"/vscode_icon.svg"} />
                    <SkillBox icon={"/typescript_icon.svg"} />
                    <SkillBox icon={"/react_icon.svg"} />
                    <SkillBox icon={"/python_icon.svg"} />
                    <SkillBox icon={"/aws_icon.svg"} />
                    <SkillBox icon={"/mysql_icon.svg"} />
                    <SkillBox icon={"/expressjs_icon.svg"} />
                    <SkillBox icon={"/nodejs_icon.svg"} />
                    <SkillBox icon={"/kotlin_icon.svg"} />
                    <SkillBox icon={"/androidstudio_icon.svg"} />
                </div>

                <div className="w-[200px] spacer"></div>
            </div>
            {/*<div>
                <p className="font-[inter-medium] text-[#8D8D8D] text-[12px] md:text-[14px]">Technologies</p>
            </div>*/}
        </div>
    );
}

const SkillBox = ({icon}) => {
    return (
        <div className="md:w-[80px] md:h-[80px] w-[40px] h-[40px]">
            <img src={icon} className="md:w-[80px] md:h-[80px] w-[40px] h-[40px]" />
        </div>
    );
}

export default SkillsCard;