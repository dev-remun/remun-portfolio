
import Logo from "./Logo";
import Button from "./Button";

import navigateTo from "../utilities/pageNavigation";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

const Navbar = () => {

    const navigate = useNavigate();
    const [route, setRoute] = useState("");

    useEffect(() => {
        navigate({route})
    }, []);


    const testClick = () => {
        setRoute
    }

    return(
        <nav className="w-fit flex justify-center mt-[40px] mb-[80px] gap-[200px] px-[40px] py-[16px] bg-[#FDFDFD] rounded-[20px] shadow-md">
            {/* Logo */}
            <Logo onClickButton={testClick}/>

            {/* Navigation Button */}
            <div className="flex gap-[40px]">
                <Button button_name={"Projects"} onClickButton={navigateTo("/projects")} />
                <Button button_name={"Services"} onClickButton={navigateTo("/services")} />
                <Button button_name={"Blogs"} onClickButton={testClick} />
                <Button button_name={"Download Resume"} onClickButton={testClick} />
            </div>

        </nav>
    );
}

export default Navbar;