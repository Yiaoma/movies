import React, {useState, useEffect} from "react";

const useScroll = () => {
    const [prevPostion, setPrevPosition] = useState(0);
    const [isHidden, setIsHidden] = useState(false);

    const handleScroll = () => {
        const currPosition = window.pageYOffset;

        if (currPosition > prevPostion) setIsHidden(true);
        if (currPosition < prevPostion) setIsHidden(false);

        setPrevPosition(currPosition);
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [handleScroll]);

    return {isHidden};
}

export default useScroll;