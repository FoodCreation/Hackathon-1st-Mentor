"use client"
import React, { useState } from "react";
import SubmitForm from "./SubmitForm";
import Answer from "./Answer";

export default function RecommendationApp() {
    const [recommendationText, setRecommendationText] = useState<string>('');
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleSetRecommendation = (text: string) => {
        setRecommendationText(text);
        setIsLoading(false);
    };

    const handleOpenModal = () => {
        setIsModalOpen(true);
        setIsLoading(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="py-5 w-full">
            <SubmitForm setRecommendation={handleSetRecommendation} openModal={handleOpenModal} />
            <Answer
                isOpen={isModalOpen} 
                recommendationText={recommendationText} 
                isLoading={isLoading}
                onClose={handleCloseModal} 
            />
        </div>
    );
}