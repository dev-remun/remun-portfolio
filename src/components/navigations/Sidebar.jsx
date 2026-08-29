
import { TextAlignJustify, VenetianMask } from "lucide-react";

import Remun from "../logo/Remun";

const Sidebar = () => {

    return(
        <nav className="flex justify-between items-center">
            <Remun />

            <div className="flex gap-x-2">
                <div className="p-1 rounded border border-[1px] border-gray-400/60 text-gray-600">
                    <VenetianMask />
                </div>
                <div className="p-1 rounded border border-[1px] border-gray-400/60 text-gray-600">
                    <TextAlignJustify />
                </div>
            </div>
        </nav>
    );
}

export default Sidebar;