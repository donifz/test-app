import CrownIcon from "../../assets/icons/crown.svg";
import FireIcon from "../../assets/icons/fire.svg";

const MainHeadContent = () => {
    return (
        <div className="flex justify-between items-center h-[56px] mb-2">
            <p className="font-medium text-lg">Ray Driving Theory</p>
            <div className="flex gap-2">
                <div className="bg-white rounded-lg px-1.5 h-9 flex items-center">
                    <CrownIcon />
                </div>
                <div className="flex gap-0.5 bg-white rounded-lg px-1.5 h-9 items-center">
                    <FireIcon />
                    <p>13</p>
                </div>
            </div>
        </div>
    );
};

export default MainHeadContent;
