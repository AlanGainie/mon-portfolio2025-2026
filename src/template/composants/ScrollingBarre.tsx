import { useState } from "react";
import Button from "./Button.tsx";
import { BUTTONSCROLLDOWN } from "../../styles/tw.ts";

function ScrollingBarre({ name }: { name?: string }) {
    const [scrollPosition, setScrollPosition] = useState(0);

    const scrollPage = () => {
        const newScroll = scrollPosition + 100; // Pixels à scroller en plus
        window.scrollTo({
            top: newScroll,
            behavior: "smooth",
        });
        setScrollPosition(newScroll);
    };

    return (
        <>
            <Button
                InternClassName={`${BUTTONSCROLLDOWN}`}
                name="↓"
                onClick={scrollPage}
            />
        </>
    );
}

export default ScrollingBarre;
