import Image from "next/image"
import github from "/public/github.svg"
import linkedin from "/public/linkedin.svg"
import instagram from "/public/instagram.svg"
import resume from "/public/Resume.svg"

const svgLinks = {
    Github: { src: github, alt: 'Github Icon', url: 'https://github.com/AndrueGage' },
    LinkedIn: { src: linkedin, alt: 'LinkedIn Icon', url: 'https://www.linkedin.com/in/andrue-desmarais/' },
    Instagram: { src: instagram, alt: 'Instagram Icon', url: 'https://www.instagram.com/androogage/?hl=en' },
    Resume: { src: resume, alt: 'Resume Icon', url: '/Andrue_Desmarais_Resume.pdf' }
};

export default function Footer() {
    return (
        <div className="bottom-0 right-0 flex gap-3 mt-6 ">
            {Object.entries(svgLinks).map(([key, { src, alt, url }]) => (
                <a href={url} key={key} target="_blank" rel="noopener noreferrer">
                    <div className="h-8 w-8 relative transform transition-transform ease-in-out duration-300 hover:scale-110">
                        <Image priority src={src} alt={alt} layout="fill" objectFit="contain" />
                    </div>
                </a>
            ))}
        </div>
    );
}
