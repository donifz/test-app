"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Select from "react-select";

const BASE_URL_API = process.env.NEXT_PUBLIC_BASE_URL_API
const currentPrice = 200;
const ContentForm = () => {
    const router = useRouter();
    const [formData, setFormData] = useState({
        desc: "",
        img: null,
        status: "pending",
        hours: 1,
        min: 1,
        screen: [],
    });

    const [screens, setScreens] = useState([]);

    const [errors, setErrors] = useState([]);

    const [price, setPrice] = useState(currentPrice);

    useEffect(() => {
        const fetchScreens = async () => {
            const res = await axios.get(BASE_URL_API+"/screen");
            if (res.status === 200) {
                const mappedScrees = res.data.map((item) => ({
                    value: item.id,
                    label: item.type,
                }));
                setScreens(mappedScrees);
            }
        };
        fetchScreens();
    }, []);

    useEffect(() => {
        setPrice(
            currentPrice * Number(formData.hours) * formData.screen.length
        );
    }, [formData.hours, formData.screen]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFormData({
            ...formData,
            img: file,
        });
        console.log(formData, "formData");
    };

    const handleScreenChange = (selectedOptions) => {
        const selectedValues = selectedOptions
            ? selectedOptions.map((option) => option.value)
            : [];
        setFormData({ ...formData, screen: selectedValues });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Submit form
            const formDataToSend = new FormData();
            formDataToSend.append("desc", formData.desc);
            formDataToSend.append("img", formData.img); // Append file
            formDataToSend.append("status", formData.status);
            formDataToSend.append("hours", "" + formData.hours);
            formDataToSend.append("min", "" + formData.min);
            formData.screen.forEach((item) => {
                formDataToSend.append("screens[]", JSON.stringify(item));
            });

            const res = await axios.post(
                BASE_URL_API+"/content",
                formDataToSend,
                {
                    headers: {
                        "Content-Type": "multipart/form-data", // Ensure multipart form data
                    },
                }
            );
            console.log(res);

            // Simulate form submission for demonstration purposes
            // In a real-world scenario, you would replace this with your own form submission logic
            setFormData({
                desc: "",
                img: null,
                status: "pending",
                hours: 1,
                min: 1,
                screen: [],
            });
            setErrors([]);
            router.push("/create-content/" + res.data.id);
            // Log the submitted form data for debugging purposes
            // In a real-world scenario, you would replace this with your own logging logic
            console.log("Form submitted:", formData);
        } catch (error) {
            console.log(error.response.data, "wwwwwww");
            const errors = error?.response?.data?.message || [];
            setErrors([...errors]);
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg mt-10"
        >
            <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">
                Upload Content
            </h2>

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Description
                </label>
                <input
                    type="text"
                    name="desc"
                    value={formData.desc}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Enter a brief description"
                    required
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Image
                </label>
                <input
                    type="file"
                    name="img"
                    onChange={handleFileChange}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none"
                    required
                />
            </div>

            {/* <div className="mb-4">
                <label
                    htmlFor="status"
                    className="block text-sm font-medium text-gray-700"
                >
                    Status
                </label>
                <select
                    id="status"
                    name="status"
                    value={formData.status}
                    onChange={(e) =>
                        setFormData({ ...formData, status: e.target.value })
                    }
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                    <option value="">Select Status</option>
                    <option value="pending">Pending</option>
                    <option value="checked">Checked</option>
                    <option value="payed">Payed</option>
                    <option value="published">Published</option>
                    <option value="ended">Ended</option>
                </select>
            </div> */}

            <div className="mb-4 flex gap-4">
                <div className="w-1/2">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Days
                    </label>
                    <input
                        type="number"
                        name="hours"
                        value={formData.hours}
                        onChange={handleInputChange}
                        min="1"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Enter hours"
                        required
                    />
                </div>

                <div className="w-1/2">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Price
                    </label>
                    <p>{price} USD</p>
                    {/* <input
                        type="number"
                        name="min"
                        value={formData.min}
                        onChange={handleInputChange}
                        min="1"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Enter minutes"
                        required
                    /> */}
                </div>
            </div>

            <div className="mb-4">
                <label
                    htmlFor="screen"
                    className="block text-sm font-medium text-gray-700"
                >
                    Select Screens
                </label>
                <Select
                    isMulti
                    options={screens}
                    value={screens.filter((option) =>
                        formData.screen.includes(option.value)
                    )}
                    onChange={handleScreenChange}
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
            </div>

            <button
                type="submit"
                className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
            >
                Submit
            </button>

            {errors.length > 0 && (
                <div className="mt-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                    <ul className="list-disc list-inside">
                        {errors.map((error, index) => (
                            <li key={index}>{error}</li>
                        ))}
                    </ul>
                </div>
            )}
        </form>
    );
};

export default ContentForm;
