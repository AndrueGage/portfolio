import Link from "next/link";
import { DarkModeToggle } from "../ui/darkmode-toggle";

export default function Navbar() {
    return (
        <header>
            <div className="flex flex-wrap items-center mx-auto p-8 justify-end">
                <nav>
                    <ul className="flex space-x-4 mt-4">
                        <button className=" text-lg border-2 rounded-md border-solid border-black p-2">
                            <Link href='/'>Home</Link>
                        </button>
                        <button className=" text-lg border-2 rounded-md border-solid border-black p-2">
                            <Link href='/about'>About</Link>
                        </button>
                        <button className=" text-lg border-2 rounded-md border-solid border-black p-2">
                            <Link href='/projects'>Projects</Link>
                        </button>
                        <button className=" text-lg border-2 rounded-md border-solid border-black p-2">
                            <Link href='/contact'>Contact</Link>
                        </button>
                        <DarkModeToggle />
                    </ul>
                </nav>
            </div>
        </header>
    )
}