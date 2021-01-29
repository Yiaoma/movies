import {useState, useEffect} from "react";

const useTransparent = () => {
    const [isTransparent, setIsTransparent] = useState(true);

    const handleScroll = () => {
        if (window.pageYOffset > 0) setIsTransparent(false);
        else setIsTransparent(true);
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    }, []);

    return {isTransparent};
}

export default useTransparent;