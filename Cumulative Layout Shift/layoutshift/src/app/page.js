'use client'

import Image from "next/image";
import sunrise from "./sunrise.jpg";
import mountain from "./mountain-lake.jpeg"
import { useState,useEffect } from "react";

export default function Home() {
  const [showImage,setShowImage]=useState()

  useEffect(()=>{
    const timer=setTimeout(()=>{
      setShowImage(true)
    },1000)

    return ()=>clearInterval(timer)
  },[])
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4">

      <div style={{ width: '600px', height: '300px'}}>

        {showImage &&   <Image
          src={mountain}
          alt="Sunrise"
          width={500}
          placeholder="blur"
          quality={60}
          height={200}
        />}
        </div>
       

      <div className="mt-10 mb-32 grid text-center">
        <p>
        The first light of dawn breaks the darkness, painting the sky with hues of orange and pink. As the sun begins its ascent, the world awakens to a fresh start, full of promise and potential. Rays of golden sunlight kiss the earth, casting long shadows and illuminating the dew-kissed grass. Birds chirp in joyful chorus, celebrating the arrival of a new day, while the tranquil silence of the early morning is broken only by the gentle rustle of leaves in the breeze. Each sunrise is a reminder of the endless possibilities that lie ahead, as the sky transitions from deep blues to brilliant yellows, showcasing nature's unparalleled artistry. Watching the sunrise can evoke a sense of peace and inspiration, as night gives way to day, encouraging mindfulness and reflection. This gradual unveiling of the sun is a moment to cherish, signifying hope, renewal, and the constant, reassuring rhythm of the universe
        </p>
      </div>
    </main>
  );
}
