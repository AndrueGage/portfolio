import Image from "next/image"
import github from "../../../public/github.svg"
import Linkedin from "../../../public/linkedin.svg"
import instagram from "../../../public/instagram.svg"


const svgLinks = {
    Github: { src: github, alt: 'Github Icon', url:'https://github.com/AndrueGage'},
    LinkedIn: { src: Linkedin, alt: 'LinkedIn Icon', url:'https://www.linkedin.com/in/andrue-desmarais/'},
    instagram: { src: instagram, alt:'Instagram icon', url:'https://www.instagram.com/androogage/?hl=en'}
};

export default function Footer(){
    return(
        <section className="mt-10">
            <div className="grid grid-cols-1 sm:grid-col-2 lg:grid-cols-3 gap-10">
                {Object.entries(svgLinks).map(([key, {src, alt, url}]) => (
                    <div key={key} className="bg-gradient p-6 shadow-md flex items-center justify-center h-14 rounded-lg">
                        <div className="h-10 w-10 relative">
                            <a href={url} target='_blank'>
                            <Image priority src={src} alt={alt} layout="fill" objectFit="contain" className="svg-icon fill-current text-black dark:text-white"/>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}