
import { useLocation } from "react-router-dom";

const usePage = () => {
    
    /**
     * @holds the location object
     * @example { pathname: "/projects", ... }
     */
    const location = useLocation();

    /**
     * @holds the url string right after the domain
     * @example "/projects" or "/"
     */
    const current_path = location.pathname;

    /**
     * @algo
     * 1. It splits the current_path into an array [ "/", "projects" ]
     * 2. [1] grabs the second item, which is the actual page name
     * 3. If [1] is just "/", then it falls back to "home"
     * 4. Returns either "home" or "<page_name>"
     */
    const page_name = current_path.split('/')[1] || 'home';

    return page_name;

}

export default usePage;