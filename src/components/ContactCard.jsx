
import ContactLink from "./links/ContactLink";

const ContactCard = () => {
    return (
        <div className="w-full md:max-w-[400px] px-[24px] py-[24px] md:px-[24px] md:py-[24px] rounded-[10px] shadow-md bg-[#FDFDFD]">
            <h2 className="font-[inter-bold] text-[#103D62] text-[14px] md:text-[16px] md:mb-[12px] mb-[12px]">Contact</h2>
            
            {/* Contact information */}
            <div className="flex flex-col md:gap-y-[16px] gap-y-[10px]">
                <ContactLink icon={"/gmail.png"} username={"rcb2023-9793-64187@bicol-u.edu.ph"} name={"Raymond C. Balingbing"} />
                <ContactLink icon={"/messenger.png"} username={"facebook.com/ray.cabarlo"} name={"Ray Mond C. Balingbing"} />
                <ContactLink icon={"/github.png"} username={"github.com/dev-remun"} name={"Raymond C. Balingbing"} />
            </div>
        </div>
    );
}

export default ContactCard;