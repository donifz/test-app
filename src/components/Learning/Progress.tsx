
"use client";
import ProgressBar from "../ui/ProgressBar";
import { observer } from "mobx-react-lite";
import questionStore from "@/store/questionStore";
import db from "../../../db.json";


const Progress = observer(() => {
	const questionsLength = db.questions.length
	const selectedQuestionsLength = questionStore.selectedQuestions.length
    return (
        <div className="mt-4">
            <p className="text-sm mb-2">{selectedQuestionsLength} questions out of {questionsLength} passed</p>
			<ProgressBar current={selectedQuestionsLength} total={questionsLength}/>
        </div>
    );
});

export default Progress;
