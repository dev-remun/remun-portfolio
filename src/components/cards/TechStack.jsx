
import Skill from "../tags/Skill";

const TechStack = () => {
    return (
        <div className="border border-[#AAAAAA]/60 rounded-lg flex flex-col items-center w-full px-6 pb-8 overflow-y-auto py-6">
            <div className="self-start">
                <h3 className="font-[public-sans] font-[600]">Tech Stacks</h3>
            </div>
            
            <div className="self-start mt-6 w-full">
                <h4 className="font-[jetbrains-mono] text-sm text-[#888888] mb-4">[ frontend ]</h4>
                <div className="flex gap-x-4">
                    <Skill skill_name="Vue" />
                    <Skill skill_name="React" />
                    <Skill skill_name="Tailwind CSS" />
                    <Skill skill_name="Vite" />
                    <Skill skill_name="Javascript" />
                    <Skill skill_name="Typescript" />
                </div>
            </div>

            <div className="self-start mt-6 w-full">
                <h4 className="font-[jetbrains-mono] text-sm text-[#888888] mb-4">[ backend ]</h4>
                <div className="flex gap-x-4">
                    <Skill skill_name="Laravel" />
                    <Skill skill_name="Express JS" />
                    <Skill skill_name="Node JS" />
                    <Skill skill_name="PHP" />
                    <Skill skill_name="OAuth" />
                    <Skill skill_name="MySQL" />
                    <Skill skill_name="Postgres" />
                </div>
            </div>

            <div className="self-start mt-6 w-full">
                <h4 className="font-[jetbrains-mono] text-sm text-[#888888] mb-4">[ devops & cloud ]</h4>
                <div className="flex gap-x-4">
                    <Skill skill_name="AWS" />
                    <Skill skill_name="Github Actions" />
                    <Skill skill_name="Docker" />
                    <Skill skill_name="Vercel" />
                    <Skill skill_name="Render" />
                </div>
            </div>

            <div className="self-start mt-6 w-full">
                <h4 className="font-[jetbrains-mono] text-sm text-[#888888] mb-4">[ machine learning ]</h4>
                <div className="flex gap-x-4">
                    <Skill skill_name="Python" />
                    <Skill skill_name="R" />
                    <Skill skill_name="YOLOv11" />
                    <Skill skill_name="U Net" />
                    <Skill skill_name="MobileNetV3" />
                    <Skill skill_name="PyTorch" />
                </div>
            </div>

            <div className="self-start mt-6 w-full">
                <h4 className="font-[jetbrains-mono] text-sm text-[#888888] mb-4">[ devt tools ]</h4>
                <div className="flex gap-x-4">
                    <Skill skill_name="VS Code" />
                    <Skill skill_name="Google Colab" />
                    <Skill skill_name="Github" />
                    <Skill skill_name="Git" />
                    <Skill skill_name="Jira" />
                    <Skill skill_name="Lucid Chart" />
                    <Skill skill_name="Hugging Face" />
                </div>
            </div>
            
        </div>
    );
}

export default TechStack;