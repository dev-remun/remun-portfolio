
const Skill = ({skill_name}) => {

    return (
        <div className="px-4 py-1 border border-[#888888]/60 flex justify-center w-fit rounded-lg hover:cursor-pointer hover:shadow-md">
            <p className="text-xs md:text-sm lg:text-sm text-nowrap font-[public-sans] text-[#444444]">
                {skill_name}
            </p>
        </div>
    );

}

export default Skill;