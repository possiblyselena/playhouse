export function FooterBar() {
    return (
        <footer className="flex w-full min-w-0 max-w-full flex-wrap items-center justify-between gap-4 overflow-hidden rounded-lg bg-macaroni p-4 font-semibold">
            <p className="text-blahaj">Made with ❤️ by Selena</p>
            <a href="https://hackclub.com/privacy-and-terms" className="underline text-blahaj">Privacy & Terms</a>
            <a href="https://hackclub.com/security-bounty" className="underline text-blahaj">Security Bounty</a>
            <div className="flex items-center gap-4">
                
            </div>
            <div className="flex min-w-0 flex-wrap items-center gap-4">
                <a href="https://hackclub.com" className="bg-creamsicle text-blahaj font-bold py-2 px-4 rounded hover:scale-105 transition-transform duration-300">Hack Club</a>
                <a href="https://slack.hackclub.com" className="bg-creamsicle text-blahaj font-bold py-2 px-4 rounded hover:scale-105 transition-transform duration-300">Slack</a>
                <a href="https://hackclub.com/clubs" className="bg-creamsicle text-blahaj font-bold py-2 px-4 rounded hover:scale-105 transition-transform duration-300">Clubs</a>
                <a href="https://hackclub.com/hackathons" className="bg-creamsicle text-blahaj font-bold py-2 px-4 rounded hover:scale-105 transition-transform duration-300">Hackathons</a>
            </div>
        </footer>
    );
}