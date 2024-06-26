import Link from "next/link";
import { DarkModeToggle } from "../ui/darkmode-toggle";

export default function Navbar() {
    return (
        <header>
            <div className="flex flex-wrap items-center mx-auto p-8 justify-end">
                <nav>
                    <span>
                        <ul className="flex space-x-4 mt-4">
                            <li className=" text-lg border-2 rounded-md border-solid border-black p-2">
                                <Link href='/'>Home</Link>
                            </li>
                            <li className=" text-lg border-2 rounded-md border-solid border-black p-2">
                                <Link href='#about'>About</Link>
                            </li>
                            <li className=" text-lg border-2 rounded-md border-solid border-black p-2">
                                <Link href='#skills'>Skills</Link>
                            </li>
                            <li className=" text-lg border-2 rounded-md border-solid border-black p-2">
                                <Link href='#projects'>Projects</Link>
                            </li>
                            <li className=" text-lg border-2 rounded-md border-solid border-black p-2">
                                <Link href='#contact'>Contact</Link>
                            </li>
                            <DarkModeToggle />
                        </ul>
                    </span>
                </nav>
            </div>
        </header>
    )
}