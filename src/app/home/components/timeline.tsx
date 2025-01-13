import { useState } from "react";

export default function Timeline() {

  const timelineData = [
    {
      day: "DAY 1",
      content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, consequuntur? Quia placeat dolores voluptas omnis assumenda! Eaque est laborum molestias distinctio qui commodi fugit? Aut pariatur tempora repellat consectetur fuga iure, nesciunt quibusdam veritatis perspiciatis, molestiae voluptatibus natus, sapiente blanditiis."
    },
    {
      day: "DAY 2",
      content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
    },
    {
      day: "DAY 3",
      content: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
    },
  ];

  const [currentDayIndex, setCurrentDayIndex] = useState(0);


  const goToNextDay = () => {
    setCurrentDayIndex((prevIndex) => (prevIndex + 1) % timelineData.length); // Loop to the first day when reaching the end
  };

  const goToPreviousDay = () => {
    setCurrentDayIndex((prevIndex) => (prevIndex - 1 + timelineData.length) % timelineData.length); // Loop to the last day when going backwards
  };

  return (
    <div className="flex flex-col  w-full h-full p-4">

      <div className="text-custom ml-4 text-[24px] mt-7 bg-gradient-to-b from-custom to-black text-transparent bg-clip-text">
        TIMELINE
      </div>

      <div className="flex justify-between w-full pt-12 px-4">

      </div>
      <div className="mt-0 flex flex-col  text-center">
        <div className="text-white text-2xl">{timelineData[currentDayIndex].day}</div>
        <div className="text-white text-left pl-4 pt-4">
          {timelineData[currentDayIndex].content}
        </div>
        {/* <button
          onClick={goToPreviousDay}
          className=" text-white rounded-full text-4xl p-2 hover:bg-opacity-80"
        >
          &lt;
        </button>
        <button
          onClick={goToNextDay}
          className=" text-white text-4xl rounded-full p-2 hover:bg-opacity-80"
        >
        &gt; */}
        {/* </button> */}
      </div>


    </div>
  );
}
