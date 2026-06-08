
const Button = ({ button_name, onClickButton }) => {
    return (
        <button 
            className="h-[40px] px-4 text-center font-bold font-[inter-bold] rounded-lg text-[#103D62] hover:bg-[#A2D5FF] cursor-pointer"
            onClick={onClickButton} >
            {button_name}
        </button>
    );
}

export default Button;