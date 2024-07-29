"use client";
import React, { useState } from "react";
import SelectFoodtype from "./SelectFoodtype";
import SubmitButton from "./SubmitButton";
import SelectFoodgenre from "./SelectFoodgenre";
import HungerSlider from "./HungerSlider";

interface SubmitFormProps {
    setRecommendation: (text: string) => void;
    openModal: () => void;
}

export default function SubmitForm({ setRecommendation, openModal }: SubmitFormProps) {
    type FoodTypeButtonValue = 'chineseCuisineValue' | 'japaneseCuisineValue' | 'westernCuisineValue';
    type FoodGenreButtonValue = 'meatValue' | 'fishValue' | 'vegetableValue';

    const [hungerLevel, setHungerLevel] = useState<number>(6);
    const [selectedFoodTypeButton, setSelectedFoodTypeButton] = useState<FoodTypeButtonValue | null>(null);
    const [selectedFoodGenreButton, setSelectedFoodGenreButton] = useState<FoodGenreButtonValue | null>(null);

    const handleFoodTypeButtonClick = (value: FoodTypeButtonValue) => {
        setSelectedFoodTypeButton(value);
    };
    const handleFoodGenreButtonClick = (value: FoodGenreButtonValue) => {
        setSelectedFoodGenreButton(value);
    };

    const handleSubmit = async () => {
        openModal();
        
        const foodTypeMap = {
            chineseCuisineValue: '中華',
            japaneseCuisineValue: '和食',
            westernCuisineValue: '洋食'
        };
        const foodGenreMap = {
            meatValue: '肉',
            fishValue: '魚',
            vegetableValue: '野菜'
        };

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
        const recommendationText = result.candidates[0].content.parts[0].text; // 結果のテキストを取得
        setRecommendation(recommendationText || "うまくテキストが取得できていません。"); // recommendationのステートに結果を設定
        console.log(recommendationText);
    };

    return (
        <div className="py-5 w-full">
            <HungerSlider hungerLevel={hungerLevel} setHungerLevel={setHungerLevel} />
            <div className="divider divider-secondary"></div>
            <SelectFoodtype onSelect={handleFoodTypeButtonClick} />
            <div className="divider divider-secondary"></div>
            <SelectFoodgenre onSelect={handleFoodGenreButtonClick} />
            <div className="divider divider-secondary"></div>
            <SubmitButton onSubmit={handleSubmit} />
        </div>
    );
}