import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useEffect, useState } from "react";

type Part = {
    id: string;
    name: string;
    attack: number;
    defense: number;
    stamina: number;
    image?: string;
};

interface Props {
    title: string;
    parts: Part[];
    onSelect: (part: Part) => void;
}

const BeyCarousel: React.FC<Props> = ({ title, parts, onSelect }) => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    const [sliderRef] = useKeenSlider<HTMLDivElement>({
        loop: true,
        slides: {
            perView: 1, // Show 1 slide always
            spacing: 0,
        },
        mode: "snap",
        initial: 0,
        slideChanged: (s) => {
            setSelectedIndex(s.track.details.rel);
            onSelect(parts[s.track.details.rel]);
        },
    });

    useEffect(() => {
        if (parts.length > 0) onSelect(parts[0]);
    }, [parts, onSelect]);

    return (
        <div className="my-6 w-full flex items-center gap-4">
            {/* Left: the title */}
            <div className="w-32 shrink-0 text-right">
                <h2 className="text-lg font-semibold">{title}</h2>
            </div>

            {/* Right: the visible carousel */}
            <div className="overflow-hidden w-full max-w-[320px]">
                <div ref={sliderRef} className="keen-slider">
                    {parts.map((part) => (
                        <div key={part.id} className="keen-slider__slide px-0 m-0">
                            <div className="bg-gray-500 shadow rounded-lg text-center p-1 m-0">
                                {part.image && (
                                    <img
                                        src={part.image}
                                        alt={part.name}
                                        className="w-24 h-24 mx-auto object-contain"
                                    />
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

};

export default BeyCarousel;
