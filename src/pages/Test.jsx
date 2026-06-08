
import Button from "../components/Button";
import Logo from "../components/Logo";

import Navbar from "../components/Navbar";
import ProfileCard from "../components/ProfileCard";
import Tag from "../components/Tag";

const Test = () => {
    const testClick = () => {
        console.log("Clicked")
    }
    return (
        <div className="flex flex-col items-center">
            <Tag tag_name={"Tag"}/>
        </div>

    );
}

export default Test;