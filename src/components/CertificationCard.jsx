import { useState } from "react";

const CertificationCard = () => {

    const [show_popup, setShowPopup] = useState(false);

    return (
        <>
            <div className="w-full md:max-w-[1000px] px-[24px] py-[24px] md:px-[24px] md:py-[24px] rounded-[10px] shadow-md bg-[#FDFDFD]">
                <h2 className="font-[inter-bold] text-[#103D62] text-[14px] md:text-[16px] md:mb-[10px] mb-[10px]">Certifications & Awards</h2>
                <CertificateItem title={"Lorem Ipsum"} date={"01/01/2001"} onClick={() => setShowPopup(true)} />
                <CertificateItem title={"Lorem Ipsum"} date={"01/01/2001"} onClick={() => setShowPopup(true)} />
                <CertificateItem title={"Lorem Ipsum"} date={"01/01/2001"} onClick={() => setShowPopup(true)} />
                <CertificateItem title={"Lorem Ipsum"} date={"01/01/2001"} onClick={() => setShowPopup(true)} />
            </div>

            {show_popup && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-6 shadow-lg w-[300px] text-center">
                        <h3 className="font-[inter-bold] text-[#103D62] text-lg mb-2">
                            Work In Progress
                        </h3>

                        <p className="text-[#8D8D8D] mb-4">
                            This feature is currently under development.
                        </p>

                        <button
                            onClick={() => setShowPopup(false)}
                            className="px-4 py-2 bg-[#103D62] text-white rounded-md cursor-pointer"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </>
        
    );
}

const CertificateItem = ({title, date, onClick}) => {
    return (
        <div onClick={onClick} className="flex hover:bg-[#F2F2F2] px-[12px] py-[12px] rounded-md justify-between items-center cursor-pointer">
            <div className="logo-and-certificate-name flex items-center gap-x-[20px]">
                <img src="/aws_icon.svg" className="w-[28px] h-[28px]"/>
                <div className="certification-details flex flex-col">
                    <h3 className="font-[inter-bold] text-[#103D62] text-[14px] md:text-[16px]">{title}</h3>
                    <p className="font-[inter-regular] text-[#8D8D8D] text-[12px] md:text-[14px]">{date}</p>
                </div>
            </div>
            <div className="view-certificate">
                <h3 className="font-[inter-regular] text-[#8D8D8D] text-[12px] md:text-[14px] underline cursor-pointer">View PDF</h3>
            </div>

        </div>
    );
}

export default CertificationCard;