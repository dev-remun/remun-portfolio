import { Outlet } from "react-router-dom";
import Profile from "../cards/Profile";
import Navbar from "../navigations/Navbar";

const MainLayout = () => {
    return (
        <div className="layout-wrapper w-full max-w-[1600px] h-screen max-h-screen flex flex-col items-center justify-between overflow-hidden mx-auto my-8 px-4">
            <Navbar />

            <main className="page-content md:hidden flex flex-col flex-1 w-full overflow-x-hidden gap-y-10 mt-6 overflow-y-auto pb-24 min-h-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                <Profile />
                <Outlet />
            </main> 

            <main className="page-content hidden md:flex flex-1 items-start w-full gap-x-10 mt-10 overflow-hidden mb-20 min-h-0">
                <div className="h-full overflow-hidden">
                    <Profile />
                </div>
                
                <div className="flex-1 w-full h-full overflow-y-auto pr-2 
                    [scrollbar-width:thin] 
                    [scrollbar-color:#88888899_transparent] 
                    [&::-webkit-scrollbar]:w-1.5
                    [&::-webkit-scrollbar-track]:bg-transparent 
                    [&::-webkit-scrollbar-thumb]:bg-[#888888]/60 
                    [&::-webkit-scrollbar-thumb]:rounded-full"
                >
                    <Outlet />
                </div>
            </main>
        </div>
    );
}

export default MainLayout;