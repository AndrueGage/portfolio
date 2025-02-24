import Link from "next/link";

export default function Navbar() {
    return (
        <header>
            <div className="flex flex-wrap items-center mx-auto p-4 md:p-8 justify-between md:justify-center">
                <nav className="w-full md:w-auto">
                    <span>
                        <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 mt-4 items-center">
                            <li className="text-lg md:text-xl border rounded-xl border-solid border-black p-2 w-full md:w-32 text-center bg-gradient">
                                <Link href='/'>Home</Link>
                            </li>
                            <li className="text-lg md:text-xl border rounded-xl border-solid border-black p-2 w-full md:w-32 text-center bg-gradient">
                                <Link href='#contact'>Contact</Link>
                            </li>
                            <li className="text-lg md:text-xl border rounded-xl border-solid border-black p-2 w-full md:w-32 text-center bg-gradient">
                                <a href="/Andrue_Desmarais_CV.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
                            </li>
                            <li className="w-full md:w-auto">      
                            </li>
                        </ul>
                    </span>
                </nav>
            </div>
        </header>
    )
}
