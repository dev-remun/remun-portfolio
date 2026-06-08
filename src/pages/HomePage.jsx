
import Navbar from "../components/Navbar";
import ProfileCard from "../components/ProfileCard";

const HomePage = () => {
    return (
        <div className="flex flex-col items-center bg-[#FAFAFA] h-screen">
            <Navbar />
            <ProfileCard />
            <div className="h-[1px] max-w-[880px] w-full bg-[#8D8D8D] my-[40px] shadow-sm"></div>
        </div>
    );
}

export default HomePage;