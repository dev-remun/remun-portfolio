
import AboutMeCard from "../components/AboutMeCard";
import CertificationCard from "../components/CertificationCard";
import ExperienceCard from "../components/ExperienceCard";
import Navbar from "../components/Navbar";
import ProfileCard from "../components/ProfileCard";
import Section from "../components/Section";
import SkillsCard from "../components/SkillsCard";
import WorkInProgress from "../components/WorkInProgress";

const ProjectPage = () => {
    return (
        <div className="flex flex-col items-center bg-[#FAFAFA] min-h-screen px-[20px] md:px-0 overflow-x-hidden md:px-[20px] pb-[100px]">
            <Navbar active_button={"Projects"}/>
            
            <WorkInProgress
                title="Projects"
                description="This section is currently under development. Stay tuned for upcoming projects and case studies."
            />

        </div>
    );
}

export default ProjectPage;