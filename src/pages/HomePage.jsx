
import AboutMeCard from "../components/AboutMeCard";
import ExperienceCard from "../components/ExperienceCard";
import Navbar from "../components/Navbar";
import ProfileCard from "../components/ProfileCard";
import Section from "../components/Section";
import SkillsCard from "../components/SkillsCard";

const HomePage = () => {
    return (
        <div className="flex flex-col items-center bg-[#FAFAFA] min-h-screen px-[20px] md:px-0 overflow-x-hidden md:px-[20px]">
            <Navbar />
            <ProfileCard />
            <Section>
                <AboutMeCard />
                <ExperienceCard />
            </Section>
            <SkillsCard />
        </div>
    );
}

export default HomePage;