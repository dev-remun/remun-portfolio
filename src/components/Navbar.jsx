
import Logo from "./Logo";
import Button from "./Button";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Navbar = ({active_button}) => {

    const navigate = useNavigate();

    const [is_menu_open, setIsMenuOpen] = useState(false);
    const [show_popup, setShowPopup] = useState(false);

    const handleNavigation = (path) => {
        navigate(path);
        setIsMenuOpen(false);
    }

    const handleDownload = () => {
        console.log("Downloading resume...");
    }

    return(
        <>
            <nav className="relative w-full max-w-[1000px] flex justify-between items-center mt-[20px] md:mt-[40px] mb-[40px] md:mb-[80px] px-[20px] md:px-[40px] py-[16px] bg-[#FDFDFD] rounded-[10px] shadow-md z-50">
                {/* Logo */}
                <Logo onClickButton={() => handleNavigation("/")}/>

                {/* Humberger menu */}
                <button 
                    className="block md:hidden text-[#103D62] p-2"
                    onClick={() => setIsMenuOpen(!is_menu_open)} >

                    {is_menu_open ? (
                    // # close icon
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        // # hamburger icon
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>

                {/* Navigation Button */}
                <div className="hidden md:flex gap-[40px]">
                    <Button button_name={"Projects"} onClickButton={() => handleNavigation("/projects")} is_activated={active_button} />
                    <Button button_name={"Services"} onClickButton={() => handleNavigation("/services")} is_activated={active_button} />
                    <Button button_name={"Blogs"} onClickButton={() => handleNavigation("/blogs")} is_activated={active_button} />
                    <Button button_name={"Download Resume"} onClickButton={() => setShowPopup(true)} is_activated={active_button} />
                </div>
            
                {/* Mobile dropdown menu */}
                {is_menu_open && (
                    <div className="absolute top-[80px] left-0 w-full bg-[#FDFDFD] shadow-md rounded-[20px] flex flex-col p-[20px] gap-[10px] md:hidden">
                        <Button button_name={"Projects"} onClickButton={() => handleNavigation("/projects")} is_activated={active_button} />
                        <Button button_name={"Services"} onClickButton={() => handleNavigation("/services")} is_activated={active_button} />
                        <Button button_name={"Blogs"} onClickButton={() => handleNavigation("/blogs")} is_activated={active_button} />
                        <Button button_name={"Download Resume"} onClickButton={() => setShowPopup(true)} is_activated={active_button} />
                    </div>
                )}
            </nav>

            {show_popup && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-6 shadow-lg w-[300px] text-center">
                        <h3 className="font-[inter-bold] text-[#103D62] text-lg mb-2">
                            Work In Progress
                        </h3>

                        <p className="text-[#8D8D8D] mb-4">
                            This feature is currently under development.
                        </p>

                        <button
                            onClick={() => setShowPopup(false)}
                            className="px-4 py-2 bg-[#103D62] text-white rounded-md cursor-pointer"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}

        </>
    );
}

export default Navbar;