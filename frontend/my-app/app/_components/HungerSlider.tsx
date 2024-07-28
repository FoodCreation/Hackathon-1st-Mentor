"use client"
import React, { useState } from 'react';

export default function HungerSlider() {
    const [hungerLevel, setHungerLevel] = useState(6);

    const handleSliderChange = (event) => {
        setHungerLevel(event.target.value);
    };

    return (
        <div className='my-10'>
            <input
                type="range"
                min={1}
                max="10"
                value={hungerLevel}
                onChange={handleSliderChange}
                step="1"
                className="range range-lg"
            />
            <div className="flex w-full justify-between text-base">
                <span className='pl-2'>1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span>5</span>
                <span>6</span>
                <span>7</span>
                <span>8</span>
                <span>9</span>
                <span className='pr-2'>10</span>
            </div>
            <div>Hunger Level: {hungerLevel}</div>
        </div>
    );
}