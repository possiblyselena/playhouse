"use client";
import Image from "next/image";
import Script from "next/script";
import { useState } from "react";
import { useRef } from "react";

const ModelViewer = "model-viewer" as any;

export default function Home() {

  const [roomIdea, setRoomIdea] = useState("");

  const adjectives = ["Cozy", "Modern", "Futuristic", "Spooky", "Magical", "Galaxy", "Rainbow", "Dreamy", "Scrappy", "Nighttime", "Underwater", "Space", "Nature", "Vintage", "Whimsical", "Winter", "Spring", "Summer", "Autumn",];
  const rooms = ["Library", "Bakery", "Living Room", "Kitchen", "Garden", "Treehouse", "Theatre", "Cafe", "Restaurant", "Bedroom", "Gym"]

  function generateRoomIdea() {
    
    const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomRoom = rooms[Math.floor(Math.random() * rooms.length)];
    setRoomIdea(`${randomAdjective} ${randomRoom}`) ;
  }

  return (
    <div className="flex flex-col flex-1 items-start justify-center bg-[url('/ikeabackground.jpg')] font-sans dark:bg-black w-full">
      <main className="flex flex-1 w-full flex-col items-start justify-between py-32 px-8 sm:px-16">
        <div className="flex flex-col items-start gap-6 text-left w-full">
          <div className=" grid grid-cols-2 items-start gap-6 text-left w-full">
            <header className="max-w-full margin-10 flex flex-row items-center justify-between gap-6 text-left w-full bg-macaroni rounded-lg p-4 font-semibold hover:scale-105 transition-transform duration-300">
              <a href="" className="bg-creamsicle text-blahaj font-bold py-2 px-4 rounded hover:scale-105 transition-transform duration-300">Home</a>
              <a href="/gallery" className="bg-creamsicle text-blahaj font-bold py-2 px-4 rounded hover:scale-105 transition-transform duration-300">Gallery</a>
              <a href="/guide" className="bg-creamsicle text-blahaj font-bold py-2 px-4 rounded hover:scale-105 transition-transform duration-300">Guide</a>
            </header>
            <div>
              <Image
                className="hover:scale-105 transition-transform duration-300"
                src="/playhouselogo.svg"
                alt="Playhouse Logo"
                width={700}
                height={24}
              />
              <h1 className="max-w-full text-3xl font-semibold leading-10 tracking-tight text-black py-10">
                Design a Room, add it to the gallery, and make a friend!
              </h1>
            </div>
              <Image
                src="/room.png"
                alt="Playhouse Logo"
                width={700}
                height={24}
              />
          </div>
          
          <div className="flex flex-col items-center gap-6 text-left w-full">
           
            <div className="bg-blahaj rounded-lg p-4 text-white grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <h1 className="font-bold text-4xl">Don't know what to design?</h1>
                <div className="relative mt-4 h-52 w-full max-w-md overflow-hidden rounded-3xl">
                  <Image
                    src="/confused.png"
                    alt="confused"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="bg-macaroni text-blahaj font-bold py-2 px-4 rounded flex h-full flex-col items-center justify-center">
                <button className="bg-creamsicle text-blahaj font-bold py-2 px-4 rounded text-3xl hover:scale-105 transition-transform duration-300" onClick={generateRoomIdea}>
                  Generate a Room Idea
                </button>
                <div className="flex w-full flex-col items-center justify-center">
                  <p className="mt-3 text-4xl font-semibold text-white text-center w-full">{roomIdea}</p>
                </div>
              </div>
            </div>

            {/*How to get started*/}
            <div className="bg-blue-100 w-full rounded-lg p-4 grid grid-cols-2 gap-4">
              <div className="text-blahaj">
                <h1 className="font-bold text-2xl">Design your own room!</h1>
                <p className="text-2xl my-3">1. Follow the Guide (coming soon) to create your room to fill on Onshape</p>
                <p className="text-2xl my-3">2. Track with the Onshape Hackatime Extension</p>
                <p className="text-2xl my-3">3. Design your own furniture to make it complete</p>
                <p className="text-2xl my-3">4. Add your project to the gallery!</p>
                <p className="text-2xl my-3">5. Get a grant for your own mini figure to live in your box!</p>
              </div>
              <div>
                <Image
                  src="/working.png"
                  alt="Working Image"
                  width={400}
                  height={700}
                  className="object-cover"
                />
              </div>
            </div>
            {/*Requirements*/}
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 w-full">
              <div className="bg-macaroni rounded-lg p-6 text-blahaj">
                <h1 className="font-bold text-2xl">Requirements</h1>
                <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
                  <div className="text-xl space-y-4">
                    <p>★ Files submitted must be .step and assembly files .gltf</p>
                    <p>★ Hour tracking can be used with the Onshape Hackatime Extension, however if you choose to use Blender, Solidworks, Fusion360, etc., you are required to use <a href="https://lapse.hackclub.com/">Lapse</a>.</p>
                    <p>★ You can use other designs from the Gallery, however your room needs to be original and have atleast 5 items designed by yourself.</p>
                  </div>
                  <div className="align-bottom flex items-end justify-center">
                    <Image
                      src="/instructions.png"
                      alt="Instructions"
                      width={700}
                      height={500}
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="bg-blahaj w-full rounded-lg p-6">
                <h1 className="font-bold text-2xl">Get cool prizes to live in your room!</h1>
                <p className="mt-4 text-xl">
                  Not Limited to Smiskis! (but they are really cute)
                </p>
                <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
                  <Image
                    src="/smiski.png"
                    alt="Smiski"
                    width={300}
                    height={500}
                    className="rounded-2xl mt-4"
                  />
                  <Image
                    src="/birthday.png"
                    alt="birthday"
                    width={300}
                    height={500}
                    className="rounded-2xl mt-4"
                  />
                </div>
              </div>
            </div>
          <div className="text-black bg-macaroni rounded-lg p-4 font-semibold hover:scale-105 transition-transform duration-300">
            <h1>
              This program is run by Selena @ Hack Club!
            </h1>
          </div>
          </div>
        </div>
      </main>
    </div>
  );
}
