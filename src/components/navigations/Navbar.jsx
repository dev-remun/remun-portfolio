import Topbar from "./Topbar";
import Sidebar from "./Sidebar";

const Navbar = () => {

    return(
        <div className="w-full">
            <div className="md:hidden">
                <Sidebar />
            </div>

            <div className="hidden md:block">
                <Topbar />
            </div>
        </div>
    );

}

export default Navbar;