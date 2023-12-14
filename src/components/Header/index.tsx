import Link from "next/link"


export const Header = () => {
    return (
        <header className="w-full py-4 px-4  flex justify-between flex-col md:flex-row">
            <Link href="/">
                <h1 className="text-black text-2xl font-bold text-center md:text-4xl">Ticketist</h1>
            </Link>
            <nav className="space-x-12 flex items-center justify-between mt-2 md:mt-0 ">
                <Link href="/browser-events">
                    <span className="transition-opacity hover:opacity-75">
                        Browse events
                    </span>
                </Link>
                <Link href="/help">
                    <span className="transition-opacity hover:opacity-75">
                        Help
                    </span>
                </Link>
                <Link href={"/sign-in"}>
                    <button className="border border-black rounded-3xl px-6 py-1 cursor-pointer hover:opacity-75 transition-opacity">
                        Sign In
                    </button>
                </Link>
            </nav>
        </header>
    )
}
