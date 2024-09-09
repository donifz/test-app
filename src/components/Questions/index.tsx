import dynamic from "next/dynamic";
import db from "../../../db.json";
import { useCallback } from "react";
import { observer } from "mobx-react-lite";
import questionStore from "../../store/questionStore";

const QuestionItem = dynamic(() => import('./QuestionItem'), {
	ssr: false,
  });
const QuestionButtons = observer(() => {
    const handleQuestionClick = useCallback(
        (questionId:number) => {
            questionStore.toggleQuestion(questionId);
        },
        [questionStore.selectedQuestions]
    );

    return (
        <div className="grid grid-cols-4 gap-[15px] mt-[26px]">
            {db.questions.map((item) => {
                return (
                        <QuestionItem
                            key={item.id}
                            item={item}
                            completedQuestions={questionStore.selectedQuestions}
                            handleQuestionClick={handleQuestionClick}
                        />
                );
            })}
        </div>
    );
});

export default QuestionButtons;
