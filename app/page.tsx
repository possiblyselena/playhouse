"use client";
import Image from "next/image";
import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { FaqAccordion } from "./components/FaqAccordion";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { FooterBar } from "./components/footerbar";

const adjectives: readonly string[] = ["Cozy", "Modern", "Futuristic", "Spooky", "Magical", "Galaxy", "Rainbow", "Dreamy", "Scrappy", "Nighttime", "Underwater", "Space", "Nature", "Vintage", "Whimsical", "Winter", "Spring", "Summer", "Autumn"];
const rooms: readonly string[] = ["Library", "Bakery", "Living Room", "Kitchen", "Garden", "Treehouse", "Theatre", "Cafe", "Restaurant", "Bedroom", "Gym"];

export default function Home() {

  const [roomIdea, setRoomIdea] = useState("");

  function generateRoomIdea() {
    
    const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomRoom = rooms[Math.floor(Math.random() * rooms.length)];
    setRoomIdea(`${randomAdjective} ${randomRoom}`) ;
  }

  return (
    <div className="flex flex-col flex-1 items-start justify-center bg-[url('/ikeabackground.jpg')] font-sans dark:bg-black w-full">
      <Navbar/>
      <main className="flex flex-1 w-full flex-col items-start justify-between py-20 px-8 sm:px-16">
        <div className="flex flex-col items-start text-left w-full">
          <div className="grid w-full grid-cols-1 items-center justify-items-center text-center">
            <div className="flex w-full flex-col items-center text-center">
              <Image
                className="hover:scale-105 transition-transform duration-300"
                src="/playhouselogo.svg"
                alt="Playhouse Logo"
                width={1000}
                height={24}
              />
              <div className="flex-rows-2 p-4">
                <h1 className="max-w-full px-5 pb-1 pt-5 text-center text-3xl font-semibold leading-10 tracking-tight text-blahaj">
                Design a Room, add it to the gallery, and make a friend!
              </h1>
              <h2 className="px-4 pb-4 pt-0 text-xl text-blahaj">
                Join <a href="https://hackclub.enterprise.slack.com/archives/C0BS4AWCTGA" className="underline">#playhouse</a> and start with the <a href="/guide" className="underline">guide</a>!
              </h2>
              </div>
            </div>
          </div>
            {/*How to get started*/}
            <div className="bg-blue-100 w-full rounded-lg pt-4 p-4 grid grid-cols-2 gap-4">
              <div className="text-blahaj p-4">
                <h1 className="font-bold text-2xl">Design your own room!</h1>
                <p className="text-2xl my-3 py-2">1. Follow the <a href="/guide" className="text-creamsicle underline">guide</a> to create your room to fill on <a href="https://www.onshape.com/">Onshape</a>.</p>
                <p className="text-2xl my-3 py-2">2. Track your hours using <a href="https://www.lapse.hackclub.com/" className="text-creamsicle underline">Lapse</a>. </p>
                <p className="text-2xl my-3 py-2">3. Design your own furniture and assemble. </p>
                <p className="text-2xl my-3 py-2">4. Add your project to the <a href="/gallery" className="text-creamsicle underline">gallery</a>.</p>
                <p className="text-2xl my-3 py-2">5. Get a grant for your own Smiski to live in your box!</p>
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
              <div className="flex flex-col items-center gap-6 text-left w-full p-6">
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
          </div>
           <FaqAccordion/>
        </div>
      </main>
      <FooterBar/>
    </div>
  );
}
