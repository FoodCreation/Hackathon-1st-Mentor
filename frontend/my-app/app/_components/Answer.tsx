import React from "react";

interface RecommendationModalProps {
    isOpen: boolean;
    recommendationText: string;
    isLoading: boolean;
    onClose: () => void;
}

export default function Answer({ isOpen, recommendationText, isLoading, onClose }: RecommendationModalProps) {
    return (
        <div className={`modal ${isOpen ? 'modal-open' : ''}`}>
            <div className="modal-box">
                <h3 className="font-bold text-2xl">おすすめの料理はこちらです！</h3>
                <div className="py-4">
                    {isLoading ? (
                        <span className="loading loading-spinner loading-lg"></span>
                    ) : (
                        <p>{recommendationText}</p>
                    )}
                </div>
                <div className="modal-action">
                    <button className="btn" onClick={onClose}>閉じる</button>
                </div>
            </div>
        </div>
    );
}