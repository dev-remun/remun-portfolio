
import SkillsCard from "../components/SkillsCard";

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