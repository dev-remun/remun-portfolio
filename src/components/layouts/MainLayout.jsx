
import { Outlet } from "react-router-dom";

import Profile from "../cards/Profile";
import Topbar from "../navigations/Topbar";

const MainLayout = () => {
    
    return (
        <div className="layout-wrapper w-full max-w-[1600px] h-screen max-h-screen flex flex-col items-center justify-between overflow-hidden mx-auto my-8">
            <Topbar />

            <main className="page-content flex flex-1 items-start w-full gap-x-10 mt-10 px-4 overflow-hidden mb-20 min-h-0">
                <Profile />
                
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