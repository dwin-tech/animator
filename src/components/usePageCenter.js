import { useWindowHeight } from "@react-hook/window-size";
import { useEffect, useRef, useState } from "react";

export function usePageCenter(animItem) {
    const height = useWindowHeight()
console.log('====================================');
console.log(height);
console.log('====================================');
    const [vis, setVis] = useState(false)


    console.log(vis)
    useEffect(() => {
        window.addEventListener("scroll", () => animOnScroll(animItem, height));
        return () =>
            window.removeEventListener("scroll", () => animOnScroll(animItem, height));
    }, []);


    function animOnScroll(height) {
        const position = window.pageYOffset
        const offsetTop = animItem?.current?.offsetTop
        const animItemHeight = animItem?.current?.offsetHeight;
        if (position + (height / 2) > offsetTop + (animItemHeight / 2)) {
            setVis(true)
        }
        else {
            setVis(false)
        }
    }
    return vis




}