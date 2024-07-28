"use client";
import React from "react";

type ButtonValue = 'chineseCuisineValue' | 'japaneseCuisineValue' | 'westernCuisineValue';

interface SelectButtonProps {
    onSelect: (value: ButtonValue) => void;
}

const SelectFoodtype: React.FC<SelectButtonProps> = ({ onSelect }) => {
    return (
        <div className="w-full my-10">
            <h1 className='text-2xl font-bold pb-5'>今日はどんな料理の気分...？</h1>
            <div className="mx-auto flex justify-between pt-3">
                <input type="radio" name="type" className="btn btn-wide text-lg" aria-label="和食"
                    onClick={() => onSelect('japaneseCuisineValue')}
                ></input>
                <input type="radio" name="type" className="btn btn-wide text-lg" aria-label="洋食"
                    onClick={() => onSelect('westernCuisineValue')}
                ></input>
                <input type="radio" name="type" className="btn btn-wide text-lg" aria-label="中華"
                    onClick={() => onSelect('chineseCuisineValue')}
                ></input>
            </div>
        </div>
    );
};

export default SelectFoodtype;