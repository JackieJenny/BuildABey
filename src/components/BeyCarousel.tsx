import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useEffect } from "react";

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
    const [sliderRef] = useKeenSlider<HTMLDivElement>({
        slides: {
            perView: 3,
            spacing: 16,
        },
        mode: "snap",
        initial: 0,
        slideChanged: (s) => {
            onSelect(parts[s.track.details.rel]);
        },
    });

    useEffect(() => {
        if (parts.length > 0) onSelect(parts[0]);
    }, [parts, onSelect]);

    return (
        <div className="my-6">
            <h2 className="text-xl font-semibold mb-2">{title}</h2>
            <div ref={sliderRef} className="keen-slider">
                {parts.map((part) => (
                    <div key={part.id} className="keen-slider__slide p-4">
                        <div className="bg-gray-500 shadow rounded-lg text-center p-4">
                            <p className="font-bold text-lg mb-1">{part.name}</p>
                            <div className="text-sm">ATK: {part.attack}</div>
                            <div className="text-sm">DEF: {part.defense}</div>
                            <div className="text-sm">STM: {part.stamina}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BeyCarousel;
