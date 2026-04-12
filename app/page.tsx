import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-[url('/ikeabackground.jpg')] font-sans dark:bg-black w-full">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16  sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left w-full">
          <button className="bg-blahaj text-white font-bold py-2 px-4 rounded center-right">
            Go to the Gallery!
          </button>
          <Image
            className="hover:scale-105 transition-transform duration-300"
            src="/playhouselogo.svg"
            alt="Playhouse Logo"
            width={1000}
            height={24}
          />
          <h1 className="max-w-full text-3xl font-semibold leading-10 tracking-tight text-black ">
            Design a Room, add it to the gallery, and make a friend!
          </h1>
          <div className="text-black bg-macaroni rounded-lg p-4 font-semibold">
            <a><button>RSVP Now!</button></a>
          </div>
          <div>
            {/*Generate a room idea*/}
            <div className="bg-blahaj rounded-lg p-4 text-white">
              <h1 className="font-bold text-4xl">Don't know what to design?</h1>
              <button className="bg-macaroni   text-blahaj font-bold py-2 px-4 rounded">
                Generate a Room Idea
              </button>
              <input>
              </input>
            </div>
            {/*How to get started*/}
            <div className="bg-blue-100 rounded-lg p-4 grid grid-cols-2 gap-4">
              <div className="text-black">
                <p>Design your own room!</p>
                <p>1. Follow the Guide to create your space on Onshape</p>
                <p>2. Track with the Onshape Hackatime Extension</p>
                <p>3. Design your own furniture to make it complete</p>
                <p>4. Add your project to the gallery!</p>
                <p>5. Get a grant for your own mini figure to live in your box!</p>
              </div>
              <div>
                <Image 
                  src="/working1.png"
                  alt="Working Image"
                  width={300}
                  height={500}
                />
                <Image
                  src="/working.png"
                  alt="Working Image"
                  width={300}
                  height={500}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
