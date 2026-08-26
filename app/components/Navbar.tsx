export function Navbar() {
    return (
        <header className="flex w-full min-w-0 max-w-full flex-wrap items-center justify-between gap-4 overflow-hidden rounded-lg bg-macaroni p-4 font-semibold">
            <a href="/"><img src="/playhouselogo.svg" alt="Playhouse Logo" width={100} height={24} /></a>
            <div className="flex min-w-0 flex-wrap items-center gap-4">
                <a href="/" className="bg-creamsicle text-blahaj font-bold py-2 px-4 rounded hover:scale-105 transition-transform duration-300">Home</a>
                <a href="/gallery" className="bg-creamsicle text-blahaj font-bold py-2 px-4 rounded hover:scale-105 transition-transform duration-300">Gallery</a>
                <a href="/guide" className="bg-creamsicle text-blahaj font-bold py-2 px-4 rounded hover:scale-105 transition-transform duration-300">Guide</a>
            </div>
        </header>
    );
}

