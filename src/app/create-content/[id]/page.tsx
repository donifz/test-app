'use client'
import axios from "axios";
import { useEffect, useState } from "react";
const BASE_URL_API = process.env.NEXT_PUBLIC_BASE_URL_API

const ContentId = ({ params }: { params: { id: string } }) => {
	const [data, setData] = useState(null);

	useEffect(() => {
		// Function to fetch data
		const fetchData = async () => {
		  try {
			const response = await axios.get(BASE_URL_API+"/content/"+params.id);
			setData(response.data);
		  } catch (error) {
			console.error('Error fetching data:', error);
		  }
		};
	
		// Initial fetch
		fetchData();
	
		// Set up interval to fetch data every 5 seconds (5000ms)
		const intervalId = setInterval(fetchData, 5000);
	
		// Clean up the interval on component unmount
		return () => clearInterval(intervalId);
	  }, []);
	  const handlePay = async () =>{
		await axios.patch(BASE_URL_API+"/content/pay/"+params.id);
	  }
  return (
	<div className="h-[100vh] flex justify-center items-center flex-col">
		<h3 className="text-2xl font-medium"> Please wait for approved status ... </h3>
		{data&&<p className="text-2xl font-medium">Your status: <span className="text-yellow-500">{data.status}</span></p>}
		{data && data.status === 'checked' && <div><p className="text-2xl font-medium">Now you can pay </p>
			<button
                  className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded"
                  onClick={() => handlePay()}
                >
                  Pay
                </button>
		</div> }
	</div>
  )
}

export default ContentId