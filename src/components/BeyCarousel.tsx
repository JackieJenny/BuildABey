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
    selectedPart?: Part;
}

const BeyCarousel: React.FC<Props> = ({ title, parts, onSelect, selectedPart }) => {
    const [, setSelectedIndex] = useState(0);

    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
        loop: true,
        slides: {
            perView: 1, // Show 1 slide always
            spacing: 0,
        },
        mode: "snap",
        initial: 0,
        slideChanged: (s) => {
            const relIdx = s.track.details.rel;
            setSelectedIndex(relIdx);
            onSelect(parts[relIdx]);
        },
    });

    useEffect(() => {
        if (selectedPart && instanceRef.current && parts.length > 0) {
            const index = parts.findIndex((p) => p.id === selectedPart.id);
            if (index !== -1 && instanceRef.current.track.details.rel !== index) {
                instanceRef.current.moveToIdx(index, true);
            }
        }
    }, [selectedPart, parts, instanceRef]);

    useEffect(() => {
        if (parts.length > 0) onSelect(parts[0]);
    }, [parts, onSelect]);

    return (
        <div className="-my-5 w-full flex items-center gap-0">
            {/* Left: the title */}
            <div className="w-32 shrink-0 text-right">
                <h2 className="text-lg font-semibold">{title}</h2>
            </div>

            {/* Right: the visible carousel */}
            <div className="overflow-hidden w-full max-w-[340px]">
                <div ref={sliderRef} className="keen-slider">
                    {parts.map((part) => (
                        <div key={part.id} className="keen-slider__slide px-10 m-0">
                            <div className="rounded-lg text-center p-1 m-0">
                                {part.image && (
                                    <img
                                        src={part.image}
                                        alt={part.name}
                                        className="w-60 h-55 mx-auto object-contain"
                                        
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
