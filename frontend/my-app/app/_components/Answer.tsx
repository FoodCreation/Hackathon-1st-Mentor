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
                <h3 className="text-xl font-bold md:text-3xl pb-3 text-center">おすすめの料理はこちらです！</h3>
                <div className="py-4 flex justify-center items-center">
                    {isLoading ? (
                        <span className="loading loading-spinner loading-lg text-center content-center mx-auto"></span>
                    ) : (
                        <p>{recommendationText}</p>
                    )}
                </div>
                <div className="modal-action">
                    <button className="btn text-slate-50 btn-primary mx-auto text-xl" onClick={onClose}>閉じる</button>
                </div>
            </div>
        </div>
    );
}