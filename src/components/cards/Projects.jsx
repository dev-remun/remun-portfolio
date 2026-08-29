import React from "react";

import Utility from "../tags/Utility";
import Button from "../buttons/Button";
import Status from "../tags/Status";

const projects_data = [
    {
        id: "retracted",
        tag: "[ Retracted ]",
        color: "blue",
        title: "Retracted",
        status: "wip",
        output: "web app",
        image_src: "/images/image-placeholder.svg",
        tech_stack: [ "laravel", "vue", "postgres", "inertia" ],
        description: "Retracted ngane. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        id: "retracted-2",
        tag: "[ Retracted 2 ]",
        color: "red",
        title: "Philippine Peso Coin Detection and Classification using YOLOv11",
        status: "wip",
        output: "comp vision",
        image_src: "/images/image-placeholder.svg",
        tech_stack: [ "yolov11", "react", "lorem", "lorem" ],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        id: "albay-reality",
        tag: "[ Albay Reality ]",
        color: "purple",
        title: "Albay Reality",
        status: "live",
        output: "mobile app",
        image_src: "/images/image-placeholder.svg",
        tech_stack: [ "kotlin", "osmdroid", "firebase", "ar core" ],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
];

const Projects = () => {
    return (
        <div className="border border-[#AAAAAA]/60 rounded-lg flex flex-col items-center w-full px-8 pb-8 py-6">
            <div className="self-start">
                <h3 className="font-[public-sans] font-[600] text-sm md:text-base lg:text-base">Projects</h3>
            </div>
            
            {projects_data.map((project, index) => (
                <React.Fragment key={project.id}>
                    <div className="self-start mt-6 w-full">
                        <div className="mb-4 flex gap-x-4 items-center">
                            <h4 className="font-[jetbrains-mono] text-xs md:text-sm lg:text-sm text-[#888888]">{project.tag}</h4>
                            <div className="flex gap-x-2">
                                <Status status_name={project.status} />
                                <Utility utility_name={project.output} color={project.color} />
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row gap-4">
                            
                            <div className="flex-1 rounded-lg h-48 md:h-full w-full">
                                <img src={project.image_src} alt={project.title} className="rounded-lg h-full w-full object-cover mb-2" />
                                        
                                <div className="flex items-center flex-wrap gap-2 mt-3">
                                    {project.tech_stack.map((tech, idx) => (
                                        <Utility key={idx} utility_name={tech} color="orange" />
                                    ))}
                                </div>
                            </div>
                            
                            <div className="md:flex-[2] mt-4 md:mt-0 w-full">
                                <h5 className="font-[public-sans] font-semibold mb-2 text-sm md:text-base lg:text-base text-justify">{project.title}</h5>
                                <p className="font-[public-sans] text-[#222222] mb-2 text-sm md:text-base lg:text-base text-justify">
                                    {project.description}
                                </p>
                                
                                <div className="flex gap-x-2 w-full justify-center md:justify-start lg:justify-start">
                                    <Button variant="secondary" size="small">View Demo</Button>
                                    <Button variant="tertiary" size="small">Case Study</Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {index < projects_data.length - 1 && (
                        <div className="w-full h-[1px] bg-gray-200 my-6"></div>
                    )}
                </React.Fragment>
            ))}
            
        </div>
    );
}

export default Projects;