import React from 'react';
import { useEffect } from 'react';

export default function HungerSlider () {
    return (
        <div>
            <input type="range" min="0" max="100" value="25" className="range" step="25" />
            <div className="flex w-full justify-between px-2 text-xs">
                <span>|</span>
                <span>|</span>
                <span>|</span>
                <span>|</span>
                <span>|</span>
            </div>
        </div>
    )
}