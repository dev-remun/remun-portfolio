
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const navigateTo = ({route}) => {
    const navigate = useNavigate();

    useEffect(() => {
        navigate({route})
    }, []);
}

export default navigateTo;