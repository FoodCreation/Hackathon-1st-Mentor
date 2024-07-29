"use client";
import React from "react";

type ButtonValue = 'meatValue' | 'fishValue' | 'vegetableValue';

interface SelectButtonProps {
    onSelect: (value: ButtonValue) => void;
}

const SelectFoodgenre: React.FC<SelectButtonProps> = ({ onSelect }) => {

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        switch (value) {
            case '肉':
                onSelect('meatValue');
                break;
            case '魚':
                onSelect('fishValue');
                break;
            case '野菜':
                onSelect('vegetableValue');
                break;
            default:
                break;
        }
    };

    return (
        <div className="w-full my-10">
            <h1 className='text-2xl font-bold pb-5 text-center md:text-left'>今日のメイン食材は...？</h1>
            <div className="hidden md:mx-auto md:flex md:justify-between md:pt-3">
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

            <div className="mx-auto md:hidden">
                <select className="select select-primary select-bordered w-full text-lg" onChange={handleChange}>
                    <option disabled selected>選択してね</option>
                    <option>肉</option>
                    <option>魚</option>
                    <option>野菜</option>
                </select>
            </div>
        </div>
    );
};

export default SelectFoodgenre;