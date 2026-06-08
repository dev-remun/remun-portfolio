
const Logo = ({onClickButton}) => {

    return(
        <button 
            className="h-[40px] px-4 text-center font-bold font-[inter-bold] rounded-lg text-[#103D62] hover:bg-[#A2D5FF] cursor-pointer"
            onClick={onClickButton} >
            <span className="text-[#1471BD]">RE</span><span className="text-[#103D62]">MUN</span>
        </button>
    );
}

export default Logo;