
const IconSkill = ({ icon, name }) => {
    return (
        <div className="flex flex-col items-center justify-center gap-y-[10px] shadow-sm max-w-[100px] w-full rounded-[10px] px-[12px] py-[12px] md:px-[16px] md:py-[16px] w-fit border-[0.2px] border-gray-200 hover:shadow-lg cursor-pointer transition-all duration-300 ease-in-out">
            <img src={icon} alt={name} className="w-[28px] h-[28px]"/>
            <p className="font-[inter-medium] text-[13px] text-center text-gray-600">{name}</p>
        </div>
    );
}

export default IconSkill;