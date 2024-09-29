"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const BASE_URL_API = process.env.NEXT_PUBLIC_BASE_URL_API
const ContentList = () => {
  const [contents, setContents] = useState([]);
  useEffect(()=>{
	const fetchScreens = async () => {
		const res = await axios.get(BASE_URL_API+"/content");
		if (res.status === 200) {
			setContents(res.data);
		}
	};
	fetchScreens();
  },[])

  const handleEdit = (id) => {
    // Handle Edit logic here
    alert(`Editing promo with ID: ${id}`);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this promo?')) {
		setContents(contents.filter((promo) => promo.id !== id));
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Promo List</h1>
      <div className="grid grid-cols-1 gap-4">
        {contents.map((content) => (
          <div
            key={content.id}
            className="bg-white shadow-lg rounded-lg p-4 flex flex-col md:flex-row items-center"
          >
            <img
              src={BASE_URL_API+"/uploads"+content.img}
              alt={content.desc}
              className="w-32 h-32 object-cover rounded-lg mr-4"
            />
            <div className="flex-grow">
              <h2 className="text-xl font-semibold">{content.desc}</h2>
              <p className="text-gray-500">
                Status: <span className="capitalize">{content.status}</span>
              </p>
              <p className="text-gray-500">
                Time: {content.hours} hours, {content.min} min
              </p>
              <p className="text-gray-500">
                Screens: {content.screens.map((screen) => screen.address).join(', ')}
              </p>
              <div className="flex space-x-4 mt-4">
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded"
                  onClick={() => handleEdit(content.id)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded"
                  onClick={() => handleDelete(content.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentList;
