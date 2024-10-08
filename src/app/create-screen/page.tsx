"use client";
// import LedScreenForm from "@/components/LedScreenForm";
import axios from "axios";
import dynamic from "next/dynamic";
import React from "react";

const LedScreenForm =  dynamic(() => import('@/components/LedScreenForm'), {ssr:false})
const BASE_URL_API = process.env.NEXT_PUBLIC_BASE_URL_API;
const CreateScreen = () => {
    const createNewScreen = async (formData) => {
        await axios.post(BASE_URL_API + "/screen", formData);
    };
    return (
        <div>
            <LedScreenForm onSubmit={createNewScreen} />
        </div>
    );
};

export default CreateScreen;
