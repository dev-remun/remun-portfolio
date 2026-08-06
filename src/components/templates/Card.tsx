
interface CardProps {
    children: React.ReactNode;
    className?: string;
}

const Card = ({ children, className }: CardProps) => {
    return(
        <div className={`w-full px-[28px] py-[24px] md:px-[24px] md:py-[24px] rounded-[10px] ${className || ''}`}>
            {children}
        </div>
    );
}

export default Card;