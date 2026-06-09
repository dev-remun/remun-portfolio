
const Section = ({children}) => {
    return (
        <div className="flex flex-col md:flex-row w-full max-w-[1000px] md:gap-x-[24px] gap-y-[24px]">
            {children}
        </div>
    );
}

export default Section;