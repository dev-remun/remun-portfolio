
import Navbar from "../components/Navbar";
import ProfileCard from "../components/ProfileCard";

const HomePage = () => {
    return (
        <div className="flex flex-col items-center bg-[#FAFAFA] min-h-screen px-[20px] md:px-0 overflow-x-hidden">
            <Navbar />
            <ProfileCard />
            <div className="h-[1px] max-w-[880px] w-full bg-[#8D8D8D] my-[40px] shadow-sm"></div>
        </div>
    );
}

export default HomePage;