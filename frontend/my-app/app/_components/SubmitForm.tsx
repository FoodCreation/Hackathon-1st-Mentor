"use client";
import React, { useState } from "react";
import SelectFoodtype from "./SelectFoodtype";
import SubmitButton from "./SubmitButton";
import SelectFoodgenre from "./SelectFoodgenre";
import HungerSlider from "./HungerSlider";

export default function SubmitForm() {

    type FoodTypeButtonValue = 'chineseCuisineValue' | 'japaneseCuisineValue' | 'westernCuisineValue';
    type FoodGenreButtonValue = 'meatValue' | 'fishValue' | 'vegetableValue';

    const [hungerLevel, setHungerLevel] = useState<number>(6);
    const [selectedFoodTypeButton, setSelectedFoodTypeButton] = useState<FoodTypeButtonValue | null>(null);
    const [selectedFoodGenreButton, setSelectedFoodGenreButton] = useState<FoodGenreButtonValue | null>(null);

    const [recommendation, setRecommendation] = useState<string>('');

    const handleFoodTypeButtonClick = (value: FoodTypeButtonValue) => {
        setSelectedFoodTypeButton(value);
    };
    const handleFoodGenreButtonClick = (value: FoodGenreButtonValue) => {
        setSelectedFoodGenreButton(value);
    };

    const handleSubmit = async () => {
        const foodTypeMap = {
            chineseCuisineValue: '中華',
            japaneseCuisineValue: '和食',
            westernCuisineValue: '洋食'
        };
        const foodGenreMap = {
            meatValue: '肉',
            fishValue: '魚',
            vegetable: '野菜'
        }

        const food_type = selectedFoodTypeButton ? foodTypeMap[selectedFoodTypeButton] : null;
        const food_genre = selectedFoodGenreButton ? foodGenreMap[selectedFoodGenreButton] : null;

        const response = await fetch('http://localhost:8000/recommend', { // FastAPIのエンドポイントに送信
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ food_genre, food_type, hunger_level: hungerLevel }), // 変数を送信
        });
        const result = await response.json();
        setRecommendation(result.recommendation); // recommendationのステートに結果を設定
    };

    return (
        <div className="py-10 w-full">
            <HungerSlider hungerLevel={hungerLevel} setHungerLevel={setHungerLevel} />
            <SelectFoodtype onSelect={handleFoodTypeButtonClick} />
            <SelectFoodgenre onSelect={handleFoodGenreButtonClick} />
            <SubmitButton onSubmit={handleSubmit} />
        </div>
    );
}