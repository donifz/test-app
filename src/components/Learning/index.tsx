import GraduationCapIcon from "../../assets/icons/graduation-cap.svg";
import RightCircleIcon from "../../assets/icons/chevron-circle-right.svg";
import dynamic from "next/dynamic";
import Link from "next/link";

const Progress = dynamic(() => import("./Progress"), {
    ssr: false,
});
const Learning = () => {
    return (
        <div className="card p-6">
            <Link href="/questions" className="flex justify-between items-center">
                <div className="flex gap-4 items-center">
                    <div className="rounded-full bg-orangeSecond w-[58px] h-[58px] flex justify-center items-center">
                        <GraduationCapIcon />
                    </div>
                    <div className="">
                        <h4 className="font-semibold">Learning</h4>
                        <p className="text-gray">Category В</p>
                    </div>
                </div>

                <div>
                    <RightCircleIcon />
                </div>
            </Link>
            <Progress />
        </div>
    );
};

export default Learning;
