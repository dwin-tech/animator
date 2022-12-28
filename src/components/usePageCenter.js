import { useWindowHeight } from "@react-hook/window-size";
import { useEffect, useRef, useState } from "react";

export const usePageCenter = (animItem) => {
    const [visible, setVisible] = useState(false)
    const height = useWindowHeight()

    var yDown = null;

    function getTouches(evt) {
        return evt.touches
    }

    function touchstart(evt) {
        const firstTouch = getTouches(evt)[0];
        yDown = firstTouch.clientY;
    };


    function handleTouchMove(evt) {
        if (!yDown) {
            return;
        }
        const element = document.getElementsByClassName('episode')[0]
        const position = window.pageYOffset || document.getElementsByClassName('episode')[0].scrollTop;
        var yUp = evt.touches[0].clientY;
        var yDiff = yDown - yUp;
        if (yDiff > 0) {
            element.scrollTo({
                top: position + 300,
                left: 0,
                // behavior: 'smooth'
            });
        } else {
            element.scrollTo({
                top: position - 300,
                left: 0,
                // behavior: 'smooth'
            });
        }
    };
    function animOnScroll() {
        const position = window.pageYOffset || document.getElementsByClassName('episode')[0].scrollTop;
        const element = document.getElementsByClassName('episode')[0]
        const offsetTop = animItem?.current?.offsetTop || 50
        const animItemHeight = animItem?.current?.offsetHeight;
        const start = position + (height / 2)
        const end = offsetTop + (animItemHeight / 2)
        if (start >= end - 100 && start <= end + 100) {
            setVisible(true)
        }
        else {
            setVisible(false)
        }
    }
    useEffect(() => {
        window.addEventListener('touchstart', touchstart, false);
        window.addEventListener('touchmove', handleTouchMove, false);

        window.addEventListener("scroll", () => animOnScroll(animItem, height), true);
        return () =>
            window.removeEventListener("scroll", () => animOnScroll(animItem, height));
    }, [animItem, height]);

    return visible

}
