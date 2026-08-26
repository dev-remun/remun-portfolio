
import { Link } from "react-router-dom";

import usePage from "../../hooks/usePage";

const Navlink = ({ url, link_name }) => {

    const page_name = usePage();

    let active_class = '';

    if(page_name === url.split('/')[1]) {
        active_class = ' bg-[#EBEBEB]';
    }

    const link_class = "font-[public-sans] rounded px-[12px] py-[6px] " + active_class;

    return (
        <Link to={url} className={link_class}>{link_name}</Link>

    );

}

export default Navlink;