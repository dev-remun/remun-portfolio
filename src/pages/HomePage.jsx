
import CertificationCard from "../components/CertificationCard";
import ExperienceCard from "../components/ExperienceCard";
import Navbar from "../components/Navbar";
import ProfileCard from "../components/cards/ProfileCard";
import TechStackCard from "../components/cards/TechStackCard";

const HomePage = () => {
    return (
        <div className="flex flex-col items-center bg-[#FAFAFA] min-h-screen px-[20px] md:px-0 overflow-x-hidden md:px-[20px] pb-[100px]">
            <Navbar />
            <ProfileCard />
            <TechStackCard />
            <ExperienceCard />
            <CertificationCard />
        </div>
    );
}

export default HomePage;