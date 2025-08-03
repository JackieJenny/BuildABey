import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../components/NavBarFix.tsx";

export default function BeyGifPage() {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate("/compare?model=custom");
        }, 2000); // Adjust delay as needed
        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <>
            <Navbar />
            <div className="h-dvh w-dvw flex flex-col justify-center items-center bg-gray-900 text-white pt-16 bg-[url('/images/BackGround2.png')] bg-cover bg-center">
                <div className="flex flex-col items-center justify-center w-full h-full">
                    <h1 className="mb-8 text-3xl">text</h1>
                    <div className="bg-black/30 rounded-xl p-8">
                        <img
                            src="/images/beyAnimation.gif"
                            alt="Building Beyblade..."
                            className="w-64 h-64 object-contain animate-fade-in"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}