"use client";
import QuestionButtons from "@/components/Questions";
import LeftArrowIcon from "../../assets/icons/arrow-left-Regular.svg";
import Link from "next/link";

const Questions = () => {

    return (
        <div className="question-navigation">
            <Link href="/" className="flex items-center gap-4 h-[56px]">
                <LeftArrowIcon />
                <h6 className="text-xl font-medium ">Learning</h6>
            </Link>
            <div className="flex justify-center h-[50px] items-center">
                <div className="flex items-center justify-center w-[109px] h-[50px]  border-b-2 border-orange">
                    <p className="text-orange">Tests</p>
                </div>
            </div>
			<QuestionButtons/>
        </div>
    );
};

export default Questions;
