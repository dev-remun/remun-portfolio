
import Projects from "../components/cards/Projects";
import TechStack from "../components/cards/TechStack";

const Home = () => {
    return (
        <div className="h-[4000px] flex flex-col gap-y-4">
            <TechStack />
            <Projects />
        </div>
    );
}

export default Home;