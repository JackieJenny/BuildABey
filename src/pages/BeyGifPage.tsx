import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../components/NavBarFix.tsx";

export default function BeyGifPage() {
    const navigate = useNavigate();
    const [fadeIn, setFadeIn] = useState(false);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        // Delay fade-in by 100ms (adjust as needed)
        const fadeInTimer = setTimeout(() => setFadeIn(true), 500);

        const fadeOutTimer = setTimeout(() => {
            setFadeOut(true);
            setTimeout(() => {
                navigate("/compare?model=custom");
            }, 700); // match fade-out duration
        }, 5300);

        return () => {
            clearTimeout(fadeInTimer);
            clearTimeout(fadeOutTimer);
        };
    }, [navigate]);

    const fadeClass = `transition-opacity duration-700 ${fadeIn && !fadeOut ? "opacity-100" : "opacity-0"}`;

    return (
        <>
            <Navbar />
            <div className="h-dvh w-dvw flex flex-col justify-center items-center bg-gray-900 text-white pt-16 bg-[url('/images/BackGround2.png')]
        overflow-hidden">
                <img
                    src="/images/beyAnimation.gif"
                    alt="Building Beyblade..."
                    className={`w-full h-full object-cover absolute top-0 left-0 ${fadeClass}`}
                />
            </div>
        </>
    );
}