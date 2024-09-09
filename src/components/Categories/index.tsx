import LexamIcon from "../../assets/icons/l-exam.svg";
import RocketIcon from "../../assets/icons/rocket-launch.svg";
import TvplayIcon from "../../assets/icons/tv-play.svg";
import TurnRightIcon from "../../assets/icons/80.svg";
import GameControllerIcon from "../../assets/icons/game-controller.svg";

const categories = [
    { id: 1, title: "DVSA Exam", icon: <LexamIcon /> },
    { id: 2, title: "Express mode", icon: <RocketIcon /> },
    { id: 3, title: "Hazard perception", icon: <TvplayIcon /> },
    { id: 4, title: "Road signs", icon: <TurnRightIcon /> },
];
const multiplayer = { id: 1, title: "Multiplayer Learning", icon: <GameControllerIcon /> };

const Categories = () => {
    return (
        <div>
            <div className="grid grid-cols-2 gap-2 mt-6">
                {categories.map((category) => {
                    return (
                        <div
                            key={category.id}
                            className="card py-4 px-3 flex gap-2 items-start h-[72px]"
                        >
                            <div className="rounded-full min-w-10 min-h-10 bg-purple bg-opacity-10 flex items-center justify-center">
                                {category.icon}
                            </div>
                            <div>
                                <h3 className="font-medium text-base">
                                    {category.title}
                                </h3>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="card py-4 px-3 flex gap-2 items-center mt-2">
                <div className="rounded-full min-w-10 min-h-10 bg-purple bg-opacity-10 flex items-center justify-center">
                    {multiplayer.icon}
                </div>
                <div>
				<h3 className="font-medium text-base">{multiplayer.title}</h3>
                </div>
            </div>
        </div>
    );
};

export default Categories;
