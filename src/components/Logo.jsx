
const Logo = ({onClickButton}) => {

    return(
        <button 
            className="h-[40px] px-4 text-center font-bold font-[inter-bold] rounded-lg text-[#103D62] cursor-pointer"
            onClick={onClickButton} >
            <span 
                className="text-white font-[archivo] text-xl tracking-widest [-webkit-text-stroke:1.6px_#C578FF] hover:text-black transition-all duration-200 ease-in-out"
            >
                munsilog
            </span>
        </button>
    );
}

export default Logo;