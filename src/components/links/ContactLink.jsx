
import Icon from "../icons/Icon";

const ContactLink = ({ icon, username, name, url }) => {

    
    return (
        <div className="flex items-center gap-x-[12px] md:gap-x-[16px] justify-between">
            
            <div className="flex items-center gap-x-[12px] md:gap-x-[16px]">
                <Icon path={icon} name={name} />
            
                <div className="flex flex-col gap-y-[4px]">
                    <span className="font-[inter-regular] underline text-gray-600 text-[14px] md:text-[14px] cursor-pointer">
                        {username}
                    </span>
                </div>
            </div>

            <span className="material-symbols-rounded cursor-pointer text-gray-600">
                open_in_new
            </span>
        </div>
    );
}
export default ContactLink;