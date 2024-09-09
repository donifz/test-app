const ProgressBar = ({ current, total }) => {
    const progressItem = [1, 2, 3, 4, 5, 6, 7];
    const percentage = Math.floor((current * progressItem.length) / total);

    return (
        <div className="w-full bg-gray-200 rounded-full h-6 relative flex justify-between gap-[3px]">
            {progressItem.map((question, i) => {
                if (i >= percentage) {
                    return (
                        <div
                            key={question}
                            className="bg-green opacity-10 w-[37px] h-[6px] rounded-md"
                        ></div>
                    );
                }
                return (
                    <div
                        key={question}
                        className="bg-green  w-[37px] h-[6px] rounded-md"
                    />
                );
            })}
        </div>
    );
};

export default ProgressBar;
