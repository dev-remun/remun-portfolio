const WorkInProgress = ({
    title = "Work In Progress",
    description = "This page is currently under development. Please check back later."
}) => {
    return (
        <div className="flex flex-col items-center justify-center flex-1 min-h-[70vh] text-center px-6">
            <div className="bg-white shadow-md rounded-xl p-8 max-w-md w-full">
                <h1 className="font-[inter-bold] text-[#103D62] text-2xl mb-3">
                    {title}
                </h1>

                <p className="font-[inter-regular] text-[#8D8D8D] text-sm md:text-base">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default WorkInProgress;