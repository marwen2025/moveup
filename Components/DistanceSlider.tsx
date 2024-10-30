// components/DistanceSlider.tsx
"use client"
import { useState } from 'react';

const DistanceSlider: React.FC = () => {
    const [distance, setDistance] = useState<number>(0);

    const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDistance(Number(event.target.value));
    };

    return (
        <div className="flex flex-col items-center">
            <h2 className="text-2xl font-semibold mb-4">Select Distance</h2>
            <input
                type="range"
                min="0"
                max="100"
                value={distance}
                onChange={handleSliderChange}
                className="slider w-full h-2 bg-gray-300 rounded-lg outline-none appearance-none cursor-pointer"
            />
            <div className="mt-2 text-xl font-semibold">
                {distance} km
            </div>
        </div>
    );
};

export default DistanceSlider;
