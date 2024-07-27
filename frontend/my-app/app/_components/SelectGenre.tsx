"use client";
import React from "react";
import { useState } from "react";

export default function SelectGenre() {

    type ButtonValue = 'chineseCuisineValue' | 'japaneseCuisineValue' | 'westernCuisineValue';

    const [selectedButton, setSelectedButton] = useState<ButtonValue | null>(null);
    const [abc, setAbc] = useState<string>('defaultAbc'); // 追加したabcのステート
    const [recommendation, setRecommendation] = useState<string>(''); // recommendationのステート

    const handleButtonClick = (value: ButtonValue) => {
        setSelectedButton(value);
    };

    const handleSubmit = async () => {
        // selectedButtonとabcの値を設定
        const food_type = selectedButton;
        const hunger_level = 6;

        const response = await fetch('http://localhost:8000/recommend', { // FastAPIのエンドポイントに送信
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ food_type, hunger_level }), // 変数を送信
        });
        const result = await response.json();
        setRecommendation(result.recommendation); // recommendationのステートに結果を設定
    };

    return (
        <div>
            <button
                style={{
                    borderRadius: '50%',
                    width: '100px',
                    height: '100px',
                    margin: '10px',
                    backgroundColor: selectedButton === 'chineseCuisineValue' ? 'lightblue' : 'lightgray',
                }}
                onClick={() => handleButtonClick('chineseCuisineValue')}
            >ボタン1</button>
            <button
                style={{
                    borderRadius: '50%',
                    width: '100px',
                    height: '100px',
                    margin: '10px',
                    backgroundColor: selectedButton === 'japaneseCuisineValue' ? 'lightblue' : 'lightgray',
                }}
                onClick={() => handleButtonClick('japaneseCuisineValue')}
            >
                ボタン2
            </button>
            <button
                style={{
                    borderRadius: '50%',
                    width: '100px',
                    height: '100px',
                    margin: '10px',
                    backgroundColor: selectedButton === 'westernCuisineValue' ? 'lightblue' : 'lightgray',
                }}
                onClick={() => handleButtonClick('westernCuisineValue')}
            >ボタン3</button>
            <div>{selectedButton}</div>
            <div>{recommendation}</div> {/* recommendationを表示 */}
            <button onClick={handleSubmit}>送信</button>
        </div>
    );
}
