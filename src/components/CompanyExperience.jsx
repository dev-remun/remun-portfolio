
const CompanyExperience = ({company_name, position, year}) => {
    return (
        <div className="flex items-center gap-x-[20px] w-full">
            <div className="w-[10px] h-[10px] rounded-[10px] bg-[#103D62]">

            </div>
            <div className="flex flex-col w-full">
                <h2 className="font-[inter-bold] text-[#103D62] text-[14px] md:text-[14px]">{position}</h2>
            
                <div className="flex justify-between">
                    <p className="font-[inter-regular] text-[#8D8D8D] text-[12px] md:text-[14px]">{company_name}</p>
                    <p className="font-[inter-regular] text-[#8D8D8D] text-[12px] md:text-[14px]">{year}</p>
                </div>
            </div>
            
        </div>
    );
}

export default CompanyExperience;