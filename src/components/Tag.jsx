
const Tag = ({tag_name}) => {
    return (
        <div className="px-[16px] py-[4px] bg-[#A2D5FF] rounded-lg shadow-sm w-fit">
            <span className="font-[inter-medium] text-[#103D62] text-[14px]">{tag_name}</span>
        </div>
    );
}

export default Tag;