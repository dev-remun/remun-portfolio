
import Button from "../components/Button";
import Logo from "../components/Logo";

import Navbar from "../components/Navbar";
import ProfileCard from "../components/ProfileCard";
import SkillsCard from "../components/SkillsCard";
import Tag from "../components/Tag";

const Test = () => {
    const testClick = () => {
        console.log("Clicked")
    }
    return (
        <div className="flex flex-col items-center">
            <SkillsCard />
        </div>

    );
}

export default Test;