import React from 'react';

interface AnswerProps {
    recommendationText: string;
}

export default function Answer(recommendationText: AnswerProps) {
    return (
        <div className="py-10 w-full">
            <div className="mx-auto flex justify-between pt-3">
                <p className="text-lg">おすすめの料理はこちらです！</p>
                <p>{recommendationText.recommendationText}</p> 
            </div>
        </div>
    );
}