"use client";
import React from "react";

interface SubmitButtonProps {
    onSubmit: () => void;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ onSubmit }) => {
    return (
        <div className="text-center my-10">
            <button className="btn btn-wide btn-lg text-slate-50 btn-primary text-4xl" onClick={onSubmit}>送信</button>
        </div>
    );
};

export default SubmitButton;