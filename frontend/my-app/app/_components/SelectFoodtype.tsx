"use client";
import React from "react";

type ButtonValue = 'chineseCuisineValue' | 'japaneseCuisineValue' | 'westernCuisineValue';

interface SelectButtonProps {
    onSelect: (value: ButtonValue) => void;
}
const SelectFoodtype: React.FC<SelectButtonProps> = ({ onSelect }) => {

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        switch (value) {
            case '和食':
                onSelect('japaneseCuisineValue');
                break;
            case '洋食':
                onSelect('westernCuisineValue');
                break;
            case '中華':
                onSelect('chineseCuisineValue');
                break;
            default:
                break;
        }
    };
    return (
        <div className="w-full my-10">
            <h1 className='text-2xl font-bold pb-5 text-center md:text-left'>今日はどんな料理の気分...？</h1>
            <div className="hidden md:mx-auto md:flex md:justify-between md:pt-3">
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

            <div className="mx-auto md:hidden">
                <select className="select select-primary select-bordered w-full text-lg" onChange={handleChange}>
                    <option disabled selected>選択してね</option>
                    <option>和食</option>
                    <option>洋食</option>
                    <option>中華</option>
                </select>
            </div>
        </div>
    );
};

export default SelectFoodtype;