"use client"
import ScreenStories from "@/components/ScreenStory";
import axios from "axios";
import React, { useEffect, useState } from "react";

const BASE_URL_API = process.env.NEXT_PUBLIC_BASE_URL_API;

const StoriesPage = () => {
    const [screen, setScreens] = useState([]);
    useEffect(() => {
        const fetchScreens = async () => {
            const res = await axios.get(BASE_URL_API + "/screen");
            if (res.status === 200) {
                setScreens(res.data);
            }
        };
        fetchScreens();
    }, []);
    
    return (
        <div className=" grid grid-cols-3 gap-2">
            {screen.map((screen) => {
                return (
                    <div key={screen.id}>
                        <h2 className="text-xl">{screen.address}</h2>
                        <ScreenStories screenId={screen.id} />
                    </div>
                );
            })}
        </div>
    );
};

export default StoriesPage;
