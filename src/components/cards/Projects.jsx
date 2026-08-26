
import Button from "../buttons/Button";
import Status from "../tags/Status";

const Projects = () => {
    return (
        <div className="border border-[#AAAAAA]/60 rounded-lg flex flex-col items-center w-full px-8 pb-8 overflow-y-auto py-6">
            <div className="self-start">
                <h3 className="font-[public-sans] font-[600]">Projects</h3>
            </div>
            
            <div className="self-start mt-6 w-full">
                <div className="mb-4 flex gap-x-4 items-center">
                    <h4 className="font-[jetbrains-mono] text-sm text-[#888888]">[ Retracted ]</h4>
                    <Status status_name="wip" />

                </div>
                <div className="flex gap-x-4">
                    <div className="flex-1 rounded-lg h-full">
                        <img src="/images/image-placeholder.svg" className="rounded-lg h-full" />
                    </div>
                    <div className="flex-2">
                        <h5 className="font-[public-sans] font-semibold mb-2">Retracted</h5>
                        <p className="font-[public-sans] text-[#222222] mb-2">
                            Retracted ngane. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        
                        <div className="flex gap-x-2">
                            <Button variant="secondary" size="small">View Demo</Button>
                            <Button variant="tertiary" size="small">Case Study</Button>
                        </div>

                    </div>
                </div>
            </div>

            <div className="w-full h-[1px] bg-gray-200 my-6"></div>

            <div className="self-start w-full">
                <div className="mb-4 flex gap-x-4 items-center">
                    <h4 className="font-[jetbrains-mono] text-sm text-[#888888]">[ Albay Reality ]</h4>
                    <Status status_name="live" />

                </div>
                <div className="flex gap-x-4">
                    <div className="flex-1 rounded-lg h-full">
                        <img src="/images/image-placeholder.svg" className="rounded-lg h-full" />
                    </div>
                    <div className="flex-2">
                        <h5 className="font-[public-sans] font-semibold mb-2">Albay Reality</h5>
                        <p className="font-[public-sans] text-[#222222] mb-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        
                        <div className="flex gap-x-2">
                            <Button variant="secondary" size="small">View Demo</Button>
                            <Button variant="tertiary" size="small">Case Study</Button>
                        </div>

                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Projects;