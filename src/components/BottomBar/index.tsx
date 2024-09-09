"use client";

import ProfileIcon from "../../assets/icons/profile.svg";
import RouteIcon from "../../assets/icons/route.svg";
import RankingIcon from "../../assets/icons/ranking.svg";
import HomeIcon from "../../assets/icons/home.svg";
import Link from "next/link";
import MenuItem from "./MenuItem";

const menu = [
    { id: 1, name: "Home", icon: <HomeIcon />, slug: "" },
    { id: 2, name: "Your plan", icon: <RouteIcon />, slug: "your-plan" },
    { id: 3, name: "Leaderboard", icon: <RankingIcon />, slug: "leaderboard" },
    { id: 4, name: "Profile", icon: <ProfileIcon />, slug: "profile" },
];

const BottomBar = () => {
    return (
        <div className=" rounded-tr-xlg rounded-tl-xlg h-[74px] bg-white">
            <div className="grid grid-cols-4 h-full items-center justify-center">
                {menu.map((menu) => {
                    return (
                        <MenuItem key={menu.id} menu={menu}/>
                    );
                })}
            </div>
        </div>
    );
};

export default BottomBar;
