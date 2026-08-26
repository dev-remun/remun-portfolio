
import Remun from "../logo/Remun";
import Navlink from "../links/Navlink";

const Topbar = () => {

    const nav_links = [
        { url: '/projects', link_name: 'Projects' },
        { url: '/certifications', link_name: 'Certifications' },
        { url: '/services', link_name: 'Services' },
        { url: '/blogs', link_name: 'Blogs' }
    ]

    return (
        <nav className="flex items-center w-full">
            {/* Logo */}
            <Remun />

            <div className="w-full flex justify-center">
                <div className="border border-1 border-[#AAAAAA]/60 w-fit rounded flex gap-x-[60px] rounded-md py-[10px] px-[20px]">
                    {
                        nav_links.map(link => {
                            return (
                                <Navlink key={link.url} url={link.url} link_name={link.link_name} />
                            )
                        })
                    }
                </div>
            </div>

        </nav>
    );

}

export default Topbar;