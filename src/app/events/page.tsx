 "use client"
import { useState } from "react";
import Burger from "../home/components/hamburger";

interface Event {
  name: string;
  description: string;
  image: string;
}

const events: Event[] = [
  {
    name: "ABHEDYA",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad asperiores at eligendi incidunt, inventore maxime. Nemo, repudiandae saepe reprehenderit.",
    image: "/images/1.jpeg"
  },
  {
    name: "TECHNOLOGY EXPO",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fermentum nulla eu dolor sollicitudin.",
    image: "/images/1.jpeg"
  },
  {
    name: "AI CONFERENCE",
    description: "Explore the advancements in AI and machine learning with experts from around the world.",
    image: "/images/1.jpeg"
  },
  {
    name: "ROBOTICS CHALLENGE",
    description: "Test your robotics skills and compete with the best minds in the field of robotics.",
    image: "/images/1.jpeg"
  },
  {
    name: "HACKATHON",
    description: "Join our 48-hour hackathon event and create innovative solutions to real-world problems.",
    image: "/images/1.jpeg"
  },
  {
    name: "GAMING TOURNAMENT",
    description: "The ultimate gaming event featuring popular games and intense competition.",
    image: "/images/1.jpeg"
  },
  {
    name: "STARTUP PITCH",
    description: "Pitch your startup ideas to investors and experts, and take your business to the next level.",
    image: "/images/1.jpeg"
  },
  {
    name: "CULTURAL NIGHT",
    description: "Enjoy a fun-filled night of music, dance, and food celebrating diverse cultures.",
    image: "/images/1.jpeg"
  }
];

export default function Event() {
  const [visibleEvent, setVisibleEvent] = useState<number | null>(null);

  const toggleEventDetails = (index: number) => {
    if (visibleEvent === index) {
      setVisibleEvent(null);  // Hide if the same event is clicked
    } else {
      setVisibleEvent(index); // Show the clicked event
    }
  };

  return (
    <>
      <div className="bg-black bg-[url('/images/bg.png')]">
        <Burger />
        <div className="text-center pt-24 text-white font-bold text-[28px]">OUR EVENTS</div>
        <div className="flex flex-col pt-8 justify-center items-center text-white">
          <div className="w-full flex flex-col justify-center items-center">
            {events.map((event, index) => (
              <div key={index} className="mb-4 w-full justify-center items-center flex flex-col">
                {/* Event name clickable with rotation animation */}
                <div
                  onClick={() => toggleEventDetails(index)}
                  className={`w-3/4 border border-white rounded-[20px] py-2 pl-4 text-[24px] mb-[29px] cursor-pointer transition-transform duration-500 ${
                    visibleEvent === index 
                  }`}
                >
                  {event.name}
                </div>

                {/* Event details (visible if clicked) */}
                <div
                  className={`w-3/4 h-auto rounded-[30px] border border-white overflow-hidden text-white  ${
                    visibleEvent === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className={`  cursor-pointer transition-transform duration-500 ${
                    visibleEvent === index ? "rotate-0" : "rotate-180"
                  }`}>
                    <img
                      src={event.image}
                      alt="Event Image"
                      className="w-full h-full object-cover rounded-t-[30px]"
                    />
                    <div className="absolute bottom-4 bg-transparent w-full px-2 rounded-b-[30px]">
                      <div className="text-center text-3xl">{event.name}</div>
                      <div className="text-[14px]">{event.description}</div>
                      <div className="text-center p-4">
                        <button className="border px-3 border-white">Register</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
