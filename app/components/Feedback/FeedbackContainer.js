'use client'
import Feedback from "./Feedback";

export default function FeedbackContainer(){
    const handleSuccess = () => {
        console.log("Успех!");
    };

    const handleError = () => {
        console.error("Ошибка:");
    };

    return (
        <Feedback onSuccess={handleSuccess} onError={handleError} />
    );
}