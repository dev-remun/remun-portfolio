import CompanyExperience from "./CompanyExperience";

const ExperienceCard = () => {
    return (
        <div className="w-full md:max-w-[400px] px-[24px] py-[24px] md:px-[24px] md:py-[24px] rounded-[10px] shadow-md bg-[#FDFDFD]">
            <h2 className="font-[inter-bold] text-[#103D62] text-[14px] md:text-[16px] md:mb-[12px] mb-[12px]">Experience</h2>
            
            {/* Company experiences */}
            <div className="flex flex-col md:gap-y-[10px] gap-y-[10px]">
                <CompanyExperience company_name={"Bicol University, HealthSync+ Project"} position={"Intern"} year={"2026"} />
                <CompanyExperience company_name={"Albay Reality"} position={"Mobile Developer"} year={"2025-2026"} />
                <CompanyExperience company_name={"Albay Reality"} position={"UI/UX Designer"} year={"2025-2026"} />
            </div>
        </div>
    );
}

export default ExperienceCard;