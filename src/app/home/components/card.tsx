import { useState, useEffect } from "react";

export default function Card1() {
  const list = [
    {
      title: "Orange",
      img: "/_180008d3-2e98-485e-a4fa-d5ba4a5b3843.jpeg",
      price: "$5.50",
    },
    {
      title: "Tangerine",
      img: "/_180008d3-2e98-485e-a4fa-d5ba4a5b3843.jpeg",
      price: "$3.00",
    },
    {
      title: "Apple",
      img: "/_180008d3-2e98-485e-a4fa-d5ba4a5b3843.jpeg",
      price: "$4.00",
    },
    {
      title: "Banana",
      img: "/_180008d3-2e98-485e-a4fa-d5ba4a5b3843.jpeg",
      price: "$2.50",
    },
    {
        title: "Banana",
        img: "/_180008d3-2e98-485e-a4fa-d5ba4a5b3843.jpeg",
        price: "$2.50",
      },
      {
        title: "Banana",
        img: "/_180008d3-2e98-485e-a4fa-d5ba4a5b3843.jpeg",
        price: "$2.50",
      },
      {
        title: "Banana",
        img: "/_180008d3-2e98-485e-a4fa-d5ba4a5b3843.jpeg",
        price: "$2.50",
      },
  ];


  const [movingIndex, setMovingIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setMovingIndex((prevIndex) => (prevIndex + 1) % list.length); 
    }, 3000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-1000"
        style={{
          transform: `translateX(-${movingIndex * (100 / 2)}%)`, 
        }}
      >
        {list.map((item, index) => (
          <div key={index} className="flex-shrink-0 w-8/12 p-2">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-[190px] object-cover rounded-t-lg"
         
                />
                <div className="absolute bottom-4 right-24 bg-black text-white px-2 py-1 rounded-sm ">
                  {item.title}
                  </div>
              </div>
        
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
