
import Skill from "./Skill";

const SkillRow = ({skill_title, skills_list}) => {

    return(
        <div className="flex flex-col items-start w-full mt-6">
            <h4 className="font-[jetbrains-mono] text-xs md:text-sm lg:text-sm text-[#888888] mb-2">
                {skill_title}
            </h4>

            <div className="flex gap-x-2 flex-wrap gap-y-2">
                {skills_list.map((skill_name) => (
                    <div key={`measure-${skill_name}`} className="inline-block">
                        <Skill skill_name={skill_name} />
                    </div>
                ))}
            </div>
            
        </div>
    );

}

export default SkillRow;