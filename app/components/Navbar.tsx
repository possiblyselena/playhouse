export function Navbar() {
    return (
        <header className="flex w-full max-w-full items-center justify-between rounded-lg bg-macaroni p-4 font-semibold">
            <img src="/playhouselogo.svg" alt="Playhouse Logo" width={100} height={24} />
            <div className="flex items-center gap-4">
                <a href="" className="bg-creamsicle text-blahaj font-bold py-2 px-4 rounded hover:scale-105 transition-transform duration-300">Home</a>
                <a href="/gallery" className="bg-creamsicle text-blahaj font-bold py-2 px-4 rounded hover:scale-105 transition-transform duration-300">Gallery</a>
                <a href="/guide" className="bg-creamsicle text-blahaj font-bold py-2 px-4 rounded hover:scale-105 transition-transform duration-300">Guide</a>
            </div>
        </header>
    );
}

