
import Navbar from "../components/Navbar";
import WorkInProgress from "../components/WorkInProgress";

const ServicePage = () => {
    return (
        <div className="flex flex-col items-center bg-[#FAFAFA] min-h-screen px-[20px] md:px-0 overflow-x-hidden md:px-[20px] pb-[100px]">
            <Navbar active_button={"Services"}/>
            
            <WorkInProgress
                title="Services"
                description="This section is currently under development. Stay tuned for upcoming available services."
            />

        </div>
    );
}

export default ServicePage;