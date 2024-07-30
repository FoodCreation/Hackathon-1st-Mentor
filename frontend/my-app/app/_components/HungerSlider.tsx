"use client";
import React from 'react';
import "app/styles/hunger-slider.css";

interface HungerSliderProps {
    hungerLevel: number;
    setHungerLevel: (level: number) => void;
}

const HungerSlider: React.FC<HungerSliderProps> = ({ hungerLevel, setHungerLevel }) => {

    const handleSliderChange = (event) => {
        setHungerLevel(Number(event.target.value));
    };

    return (
        <div className='mt-3 mb-10 text-slate-900 w-full'>
            <h1 className='text-2xl font-bold py-5 text-center md:text-left'>今の空腹度は...？</h1>
            <input
                type="range"
                min={1}
                max="10"
                value={hungerLevel}
                onChange={handleSliderChange}
                step="1"
                className="w-full inputRange mt-5 mb-2"
            />
            <div className="flex justify-between text-lg font-bold pt-2 text-slate-900 md:ml-3">
                <span>１</span>
                <span>２</span>
                <span>３</span>
                <span>４</span>
                <span>５</span>
                <span>６</span>
                <span>７</span>
                <span>８</span>
                <span>９</span>
                <span>１０</span>
            </div>
        </div>
    );
};

export default HungerSlider;