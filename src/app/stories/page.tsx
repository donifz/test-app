"use client";
// import { useRouter } from 'next/navigation'
import io from "socket.io-client";
const BASE_URL_API = process.env.NEXT_PUBLIC_BASE_URL_API

const socket = io(BASE_URL_API); // URL вашего бэкенда


import StoriesSlider from "@/components/Stories/StoriesSlider";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Stories = () => {
    const [stories, setStories] = useState([]);
    useEffect(() => {
        const fetchScreens = async () => {
            const res = await axios.get(BASE_URL_API+"/content");
            if (res.status === 200) {
                const mappedStories = res.data.map((item) => ({
                    type: item.img.split(".").at(-1) === "mp4"?"video":"image",
                    src: BASE_URL_API+"/uploads" + item.img,
                }));
                console.log(mappedStories, "aass");

                setStories([...mappedStories]);
            }
        };
        fetchScreens();
    }, []);
    useEffect(() => {
        socket.on("newContent", (newContent) => {
            console.log(newContent);
            const mappedStories = newContent.map((item) => ({
                type: item.img.split(".").at(-1) === "mp4"?"video":"image",
                src: BASE_URL_API+"/uploads" + item.img,
            }));
            setStories([ ...mappedStories]);
            console.log(stories);
        });

        return () => {
            socket.off("newContent");
        };
    }, []);
    console.log(stories[0], "stories");

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            {stories.length > 0 && (
                <div>
                    <StoriesSlider stories={stories} />
                </div>
            )}
        </div>
    );
};

export default Stories;
