import React from 'react';
import Burger from "../components/hamburger"; 

interface TimelineEvent {
  day: string;
  title: string;
  description: string;
}

const timelineData: TimelineEvent[] = [
  {
    day: "Day 1",
    title: "Event 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed qui veroes praesentium maiores, sint eos vero sapiente voluptas debitis dicta dolore.",
  },
  {
    day: "Day 1",
    title: "Event  2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed qui veroes praesentium maiores, sint eos vero sapiente voluptas debitis dicta dolore.",
  },
  {
    day: "Day 2",
    title: "Event 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed qui veroes praesentium maiores, sint eos vero sapiente voluptas debitis dicta dolore.",
  },
  {
    day: "Day 2",
    title: "Event 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed qui veroes praesentium maiores, sint eos vero sapiente voluptas debitis dicta dolore.",
  },
  {
    day: "Day 3",
    title: "Event 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed qui veroes praesentium maiores, sint eos vero sapiente voluptas debitis dicta dolore.",
  },
  {
    day: "Day 3",
    title: "Event 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat tempora necessitatibus laboriosam deleniti repellendus? Dolorem odit aut ea repellat id sed.",
  },
];

const Timeline = () => {
  return (
    <div className="min-h-screen relative bg-black py-10">
      <Burger /> 
      <div className="text-center  text-white font-bold text-[28px] ">
        Timeline
      </div>

      <div className="space-y-6">
        {timelineData.map((event, index) => (
          <div
            key={index}
            className={`flex ${index % 2 === 1 ? 'justify-start' : 'justify-end'} p-6 opacity-0 animate-fade-in`}
            style={{ animationDelay: `${index * 1200}ms` }}
          >
            <section className="relative bg-transparent rounded-lg w-[167px] h-[206px] p-4">
              
              <div
                className={`absolute inset-y-0 ${index % 2 === 1 ? 'right-0' : 'left-0'} w-1 bg-white`}
                style={{ animationDelay: `${index * 1200}ms` }}
              />

              <div
                className={`absolute top-[4px] left-1/2 transform -translate-x-1/2 bg-teal-500 text-white w-10 h-10 rounded-3xl flex items-center justify-center text-xs`}
              >
                {event.day}
              </div>

              {/* Title and description */}
              <div className="flex flex-col items-center justify-center text-center  space-y-4">
                <span className="text-sm font-semibold text-white mt-12 line-clamp-1">{event.title}</span>
                <p className="text-xs text-white  line-clamp-2">{event.description}</p>

                <a
                  href="/register" 
                  className="text-xs text-teal-500 bg-teal-100 px-3 py-1 rounded-full hover:bg-teal-200 transition"
                >
                  Register Here
                </a>
              </div>

              {/* Circle at the bottom of the white line */}
              <div
                className={`absolute ${index % 2 === 1 ? '-right-2 ' : '-left-2'} -bottom-[50px]      w-4 h-4 rounded-full bg-white opacity-0 animate-fade-in`}
                style={{ animationDelay: `${(index + 1) * 1200}ms` }}
              />
            </section>
          </div>
        ))}
      </div>

      <style>
        {`
          @keyframes fade-in {
            0% {
              opacity: 0;
              transform: translateY(20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-fade-in {
            animation: fade-in 1s forwards;
          }
        `}
      </style>
    </div>
  );
};

export default Timeline;
