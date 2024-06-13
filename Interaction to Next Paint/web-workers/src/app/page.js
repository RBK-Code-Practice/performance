"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [bgColor, setBgColor] = useState("white");
  const [count, setCount] = useState(0);
  const usedColors = [
    "bg-red-900",
    "bg-blue-900",
    "bg-yellow-900",
    "bg-green-900",
  ];
  const changeColor = () => {
    const color = ["red", "blue", "yellow", "green"];
    setBgColor(color[Math.floor(Math.random() * color.length)]);
  };

  const worker = new Worker("calculator.js");
  // worker.postMessage('clicked')
  


  worker.onmessage=function(message){
    setCount(message.data)
  }

  const calculateTotal = () => {
    let count = 0;
    for (let i = 0; i < 10000000000; i++) {
      count += 1;
    }
    setCount(count);
  };
  return (
    <main
      className={`flex bg-${bgColor}-900 min-h-screen flex-col items-center justify-between p-24`}
    >
      <button
        onClick={changeColor}
        className="bg-blue-500 hover:bg-blue-700 mb-10 text-white font-bold py-2 px-4 rounded"
      >
        Change Color
      </button>

      <button
        onClick={() => {
          // calculateTotal();
          worker.postMessage('calculate Total')
        }}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Calculate Total
      </button>
      <p>Web Workers</p>

      <h3>Calculated Total is #{count}</h3>
    </main>
  );
}
