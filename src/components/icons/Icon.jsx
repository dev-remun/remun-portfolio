
const Icon = ({ name, path}) => {
    return (
        <img src={path} alt={name} className="w-[20px] h-[20px]" />
    );
}

export default Icon;