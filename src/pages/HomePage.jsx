
import AboutMeCard from "../components/AboutMeCard";
import CertificationCard from "../components/CertificationCard";
import ExperienceCard from "../components/ExperienceCard";
import Navbar from "../components/Navbar";
import ProfileCard from "../components/ProfileCard";
import Section from "../components/Section";
import ContactCard from "../components/ContactCard";
import SkillsCard from "../components/cards/SkillsCard";

const HomePage = () => {
    return (
        <div className="flex flex-col items-center bg-[#FAFAFA] min-h-screen px-[20px] md:px-0 overflow-x-hidden md:px-[20px] pb-[100px]">
            <Navbar />
            <ProfileCard />
            <Section>
                <AboutMeCard />
                <ContactCard />
                
            </Section>
            <SkillsCard />
            <ExperienceCard />
            <CertificationCard />
        </div>
    );
}

export default HomePage;