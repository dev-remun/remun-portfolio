
const Tag = ({tag_name}) => {
    return (
        <div className="px-[16px] py-[4px] bg-[#D3EBFF] rounded-lg shadow-sm w-fit">
            <span className="font-[inter-medium] text-[#103D62] text-[12px] md:text-[14px]">{tag_name}</span>
        </div>
    );
}

export default Tag;