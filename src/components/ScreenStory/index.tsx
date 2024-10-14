"use client";
// import { useRouter } from 'next/navigation'
import io from "socket.io-client";
const BASE_URL_API = process.env.NEXT_PUBLIC_BASE_URL_API;

const socket = io(BASE_URL_API); // URL вашего бэкенда

import StoriesSlider from "@/components/Stories/StoriesSlider";
import React, { useEffect, useState } from "react";
import axios from "axios";

const ScreenStories = ({ screenId = 1 }) => {
    const [stories, setStories] = useState([]);
    useEffect(() => {
        const fetchScreens = async () => {
            try {
                const res = await axios.get(
                    BASE_URL_API + "/content/screen/" + screenId
                );
                if (res.status === 200) {
                    const mappedStories = res.data.map((item) => ({
                        type:
                            item.img.split(".").at(-1) === "mp4"
                                ? "video"
                                : "image",
                        src: BASE_URL_API + "/uploads" + item.img,
                    }));
                    setStories([...mappedStories]);
                }
            } catch (error) {
                console.error("Error fetching stories:", error);
            }
        };
        fetchScreens();
    }, []);

    useEffect(() => {
        socket.on("publishContent", (newContent) => {
            if (newContent.id === screenId) {
                const mappedStories = newContent.contents.map((item) => ({
                    type:
                        item.img.split(".").at(-1) === "mp4"
                            ? "video"
                            : "image",
                    src: BASE_URL_API + "/uploads" + item.img,
                }));
                setStories([...mappedStories]);
            }
        });

        return () => {
            socket.off("publishContent");
        };
    }, []);

    return (
        <div className="">
            {stories.length > 0 && (
                <div>
                    <StoriesSlider stories={stories} />
                </div>
            )}
        </div>
    );
};

export default ScreenStories;
