
const Contactlink = ({ className, children }) => {

    return (
        <div
            className={`font-[public-sans] text-xs text-[#444444] md:text-sm inline-flex items-center justify-center gap-x-2 ${className}`}
        >
            {children}
        </div>
    );

}

export default Contactlink;