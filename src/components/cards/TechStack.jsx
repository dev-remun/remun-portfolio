
import SkillRow from "../tags/SkillRow";

const TechStack = () => {
    const frontend_skills = ["Vue", "React", "Tailwind CSS", "Vite", "Javascript", "Typescript"];
    const backend_skills = ["Laravel", "Express JS", "Node JS", "PHP", "OAuth", "MySQL", "Postgres"];
    const cloud_skills = ["AWS", "Github Actions", "Docker", "Vercel", "Render"];
    const ml_skills = ["Python", "R", "YOLOv11", "U Net", "MobileNetV3", "PyTorch"];
    const tools_skills = ["Github", "Git", "Google Colab", "VS Code", "Jira", "Lucid Chart", "Hugging Face"];

    return (
        <div className="border border-[#AAAAAA]/60 rounded-lg flex flex-col items-center w-full px-6 pb-8 py-6">
            <div className="self-start">
                <h3 className="font-[public-sans] font-[600] text-sm md:text-base lg:text-base">
                    Tech Stacks
                </h3>
            </div>
            
            <SkillRow skill_title="[ frontend ]" skills_list={frontend_skills} />
            <SkillRow skill_title="[ backend ]" skills_list={backend_skills} />
            <SkillRow skill_title="[ devops & cloud ]" skills_list={cloud_skills} />
            <SkillRow skill_title="[ machine learning ]" skills_list={ml_skills} />
            <SkillRow skill_title="[ devt tools ]" skills_list={tools_skills} />
        </div>
    );
}

export default TechStack;