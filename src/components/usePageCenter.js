import { useWindowHeight } from "@react-hook/window-size";
import { useEffect, useRef, useState } from "react";

export const usePageCenter = (animItem) => {
    const [visible, setVisible] = useState(false)
    const height = useWindowHeight()
    function animOnScroll() {
        const position = window.pageYOffset || document.getElementById('App').scrollTop;
        console.log("🚀 ~ file: usePageCenter.js:9 ~ animOnScroll ~ position", position)
        const offsetTop = animItem?.current?.offsetTop
        console.log("🚀 ~ foffsetTop", offsetTop)
        const animItemHeight = animItem?.current?.offsetHeight;
        const start = position + (height / 2)
        const end = offsetTop + (animItemHeight / 2)
        if (start >= end-100 && start <= end + 100) {
            setVisible(true)
        }
        else {
            setVisible(false)
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", () => animOnScroll(animItem, height), true);
        return () =>
            window.removeEventListener("scroll", () => animOnScroll(animItem, height));
    }, [animItem, height]);

    return visible

}
