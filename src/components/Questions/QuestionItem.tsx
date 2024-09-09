import BtnShadow from "../../assets/icons/shadow.svg";
import CheckIcon from "../../assets/icons/check-circle.svg";
import { memo, useMemo } from "react";

const QuestionItem = ({ item, completedQuestions, handleQuestionClick }) => {
    const questionId = item.id;
    const isCompleted = useMemo(()=> completedQuestions.includes(questionId), [completedQuestions, questionId]);
	
    return (
        <button
            className={`relative w-[71px] h-[71px] rounded-full text-center flex items-center justify-center showdowBtn`}
            onClick={() => handleQuestionClick(questionId)}
        >
            {isCompleted && (
                <CheckIcon className="absolute top-0 right-0 z-20" />
            )}
            <div className="absolute bottom-0 -right-0">
                <BtnShadow />
            </div>
            {questionId}
        </button>
    );
};

export default memo(QuestionItem);
