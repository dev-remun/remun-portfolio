import "../App.css"
const SkillsCard = () => {
    return (
        <div className="carousel w-full max-w-[1000px] flex items-center overflow-x-auto gap-x-[60px] px-[24px] py-[24px] border-t-[1px] border-b-[1px] border-[#A6A6A6]">
            <div className="w-[200px]">

            </div>
            <div className="group flex gap-x-[60px] items-center justify-center">
                <SkillBox icon={"/figma_icon.svg"} />
                <SkillBox icon={"/vscode_icon.svg"} />
                <SkillBox icon={"/androidstudio_icon.svg"} />
                <SkillBox icon={"/mysql_icon.svg"} />
                <SkillBox icon={"/typescript_icon.svg"} />
                <SkillBox icon={"/react_icon.svg"} />
                <SkillBox icon={"/python_icon.svg"} />
                <SkillBox icon={"/expressjs_icon.svg"} />
                <SkillBox icon={"/nodejs_icon.svg"} />
                <SkillBox icon={"/kotlin_icon.svg"} />
            </div>

            <div aria-hidden className="group flex gap-x-[60px] items-center justify-center">
                <SkillBox icon={"/figma_icon.svg"} />
                <SkillBox icon={"/vscode_icon.svg"} />
                <SkillBox icon={"/androidstudio_icon.svg"} />
                <SkillBox icon={"/mysql_icon.svg"} />
                <SkillBox icon={"/typescript_icon.svg"} />
                <SkillBox icon={"/react_icon.svg"} />
                <SkillBox icon={"/python_icon.svg"} />
                <SkillBox icon={"/expressjs_icon.svg"} />
                <SkillBox icon={"/nodejs_icon.svg"} />
                <SkillBox icon={"/kotlin_icon.svg"} />
            </div>

            <div className="w-[200px]"></div>

        </div>
    );
}

const SkillBox = ({icon}) => {
    return (
        <div className="w-[80px] h-[80px]">
            <img src={icon} className="w-[80px] h-[80px]" />
        </div>
    );
}

export default SkillsCard;