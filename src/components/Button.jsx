
const Button = ({ button_name, onClickButton, is_activated }) => {
    let default_button_color = "h-[40px] px-4 text-center font-bold font-[inter-bold] rounded-lg text-[#103D62] hover:bg-[#A2D5FF] cursor-pointer"
    let active_button_color = "h-[40px] px-4 text-center font-bold font-[inter-bold] rounded-lg text-[#103D62] bg-[#A2D5FF] cursor-pointer"
    let button_color = ""

    if(button_name === is_activated) {
        button_color = active_button_color
    }
    else {
        button_color = default_button_color
    }

    return (
        <button 
            className={button_color}
            onClick={onClickButton} >
            {button_name}
        </button>
    );
}

export default Button;