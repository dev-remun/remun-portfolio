const Utility = ({utility_name, color}) => {
    
    let utility_class = "px-2 border-[#888888]/60 flex justify-center w-fit rounded-full hover:cursor-pointer ";

    switch (color) {
        case "green":
            utility_class += "bg-green-200 border-green-600 text-green-800";
            break;

        case "blue":
            utility_class += "bg-blue-200 border-blue-600 text-blue-800";
            break;

        case "red":
            utility_class += "bg-red-200 border-red-600 text-red-800";
            break;

        case "purple":
            utility_class += "bg-purple-200 border-purple-600 text-purple-800";
            break;

        case "orange":
            utility_class += "bg-orange-200 border-orange-600 text-orange-800";
            break;

        case "yellow":
            utility_class += "bg-yellow-200 border-yellow-600 text-yellow-800";
            break;

        default:
            utility_class += "bg-gray-200 border-[#888888] text-[#444444]";
            break;
    }

    return (
        <div className={utility_class}>
            <p className="text-xs md:text-sm lg:text-sm font-[public-sans]">
                {utility_name}
            </p>
        </div>
    );

}

export default Utility;