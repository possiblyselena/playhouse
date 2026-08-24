export function FooterBar() {
    return (
        <footer className="flex w-full max-w-full items-center justify-between rounded-lg bg-macaroni p-4 font-semibold">
            <p className="text-blahaj">Made with ❤️ by teenagers, for teenagers at Hack Club</p>
            <div className="flex items-center gap-4">
                <a href="https://hackclub.com" className="bg-creamsicle text-blahaj font-bold py-2 px-4 rounded hover:scale-105 transition-transform duration-300">Hack Club</a>
                <a href="https://slack.hackclub.com" className="bg-creamsicle text-blahaj font-bold py-2 px-4 rounded hover:scale-105 transition-transform duration-300">Slack</a>
                <a href="https://hackclub.com/clubs" className="bg-creamsicle text-blahaj font-bold py-2 px-4 rounded hover:scale-105 transition-transform duration-300">Clubs</a>
                <a href="https://hackclub.com/hackathons" className="bg-creamsicle text-blahaj font-bold py-2 px-4 rounded hover:scale-105 transition-transform duration-300">Hackathons</a>
            </div>
        </footer>
    );
}