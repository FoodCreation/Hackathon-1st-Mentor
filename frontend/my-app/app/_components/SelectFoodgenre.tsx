"use client";
import React from "react";

type ButtonValue = 'meatValue' | 'fishValue' | 'vegetableValue';

interface SelectButtonProps {
    onSelect: (value: ButtonValue) => void;
}

const SelectFoodgenre: React.FC<SelectButtonProps> = ({ onSelect }) => {
    return (
        <div className="w-full pt-10">
            <h1 className='text-2xl font-bold py-5'>今日のメイン食材は...？</h1>
            <div className="mx-auto flex justify-between pt-3">
                <input type="radio" name="genre" className="btn btn-wide text-lg" aria-label="肉"
                    onClick={() => onSelect('meatValue')}
                ></input>
                <input type="radio" name="genre" className="btn btn-wide text-lg" aria-label="魚"
                    onClick={() => onSelect('fishValue')}
                ></input>
                <input type="radio" name="genre" className="btn btn-wide text-lg" aria-label="野菜"
                    onClick={() => onSelect('vegetableValue')}
                ></input>
            </div>
        </div>
    );
};

export default SelectFoodgenre;