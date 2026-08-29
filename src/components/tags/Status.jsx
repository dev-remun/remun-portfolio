
const Status = ({status_name}) => {
    
    let status_class = "px-2 border border-[#888888]/60 flex justify-center w-fit rounded-full hover:cursor-pointer ";

    switch (status_name) {
        case "live":
            status_class += "bg-green-200 border-green-600 text-green-800";
            break;

        case "wip":
            status_class += "bg-gray-200 border-[#888888] text-[#444444]";
            break;

        default:
            break;
    }

    return (
        <div className={status_class}>
            <p className="text-xs md:text-sm lg:text-sm font-[public-sans]">
                {status_name}
            </p>
        </div>
    );

}

export default Status;