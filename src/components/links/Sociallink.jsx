
const Sociallink = ({ href, className, children }) => {

    return (
        <a 
            href={href}
            target="_blank"
            rel="noopener noreferrer" 
            className={`font-[jetbrains-mono] underline text-[12px] text-[#444444]/60 md:text-sm inline-flex items-center justify-center gap-x-1 hover:cursor-pointer hover:opacity-80 transition-opacity ${className}`}
        >
            {children}
        </a>
    );

}

export default Sociallink;