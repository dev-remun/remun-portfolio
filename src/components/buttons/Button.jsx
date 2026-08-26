
const Button = ({ onClick, children, type = "button", variant, size, ...rest }) => {

    let class_name = "rounded-md font-[public-sans] hover:cursor-pointer";

    switch(variant) {
        case "primary":
            class_name += " border bg-[#F6F6F6] border-[#C1C1C1] hover:bg-[#DFDFDF]/60";
            break;
            
        case "secondary":
            class_name += " bg-[#F6F6F6] hover:bg-[#DFDFDF]/60";
            break;

        case "tertiary":
            class_name += " border border-[#D1D1D1] hover:bg-[#DFDFDF]/20";
            break;
    }

    switch(size) {
        case "small":
            class_name += " px-[20px] py-[6px] text-sm";
            break;
        
        case "default":
            class_name += " py-[6px] px-[28px] text-base";
            break;
    }

    return (
        <button type={type} onClick={onClick} {...rest} className={class_name}>
            {children}
        </button>
    );
}

export default Button;