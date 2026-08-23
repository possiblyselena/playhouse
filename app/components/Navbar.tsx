export function Navbar() {
    return (
        <header className="max-w-full margin-10 flex flex-row items-center justify-between gap-6 text-left w-full bg-macaroni rounded-lg p-4 font-semibold hover:scale-105 transition-transform duration-300">
              <a href="" className="bg-creamsicle text-blahaj font-bold py-2 px-4 rounded hover:scale-105 transition-transform duration-300">Homey</a>
              <a href="/gallery" className="bg-creamsicle text-blahaj font-bold py-2 px-4 rounded hover:scale-105 transition-transform duration-300">Gallery</a>
              <a href="/guide" className="bg-creamsicle text-blahaj font-bold py-2 px-4 rounded hover:scale-105 transition-transform duration-300">Guide</a>
        </header>
    );
}

