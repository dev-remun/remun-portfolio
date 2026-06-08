
import Logo from "./Logo";
import Button from "./Button";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {

    const navigate = useNavigate();

    const [is_menu_open, setIsMenuOpen] = useState(false);

    const handleNavigation = (path) => {
        navigate(path);
        setIsMenuOpen(false);
    }

    const handleDownload = () => {
        console.log("Downloading resume...");
    }

    return(
        <nav className="relative w-full max-w-[880px] flex justify-between items-center mt-[20px] md:mt-[40px] mb-[40px] md:mb-[80px] px-[20px] md:px-[40px] py-[16px] bg-[#FDFDFD] rounded-[20px] shadow-md z-50">
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
                <Button button_name={"Projects"} onClickButton={() => handleNavigation("/projects")} />
                <Button button_name={"Services"} onClickButton={() => handleNavigation("/services")} />
                <Button button_name={"Blogs"} onClickButton={() => handleNavigation("/blogs")} />
                <Button button_name={"Download Resume"} onClickButton={() => handleDownload()} />
            </div>
            
            {/* Mobile dropdown menu */}
            {is_menu_open && (
                <div className="absolute top-[80px] left-0 w-full bg-[#FDFDFD] shadow-md rounded-[20px] flex flex-col p-[20px] gap-[10px] md:hidden">
                    <Button button_name={"Projects"} onClickButton={() => handleNavigation("/projects")} />
                    <Button button_name={"Services"} onClickButton={() => handleNavigation("/services")} />
                    <Button button_name={"Blogs"} onClickButton={() => handleNavigation("/blogs")} />
                    <Button button_name={"Download Resume"} onClickButton={() => handleDownload()} />
                </div>
            )}

        </nav>
    );
}

export default Navbar;