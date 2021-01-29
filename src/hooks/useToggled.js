import {useState} from "react";

const useToggled = () => {
    const [isToggled, setIsToggled] = useState(false);

    const handleToggle = () => setIsToggled(!isToggled);

    return {isToggled, handleToggle};
}

export default useToggled;