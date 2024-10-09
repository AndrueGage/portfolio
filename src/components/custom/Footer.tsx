import Image from "next/image"
import github from "/public/github.svg"
import linkedin from "/public/linkedin.svg"
import instagram from "/public/instagram.svg"
import { PiReadCvLogo } from "react-icons/pi";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const svgLinks = {
  Github: { src: github, alt: 'Github Icon', url: 'https://github.com/AndrueGage' },
  LinkedIn: { src: linkedin, alt: 'LinkedIn Icon', url: 'https://www.linkedin.com/in/andrue-desmarais/' },
  Instagram: { src: instagram, alt: 'Instagram Icon', url: 'https://www.instagram.com/androogage/?hl=en' },
  Resume: { src: null, alt: 'Resume Icon', url: '/Andrue_Desmarais_Resume.pdf' }
};

    export default function Footer() {
      return (
        <TooltipProvider>
          <div className="bottom-0 right-0 flex gap-3 mt-6">
            {Object.entries(svgLinks).map(([key, { src, alt, url }]) => (
              <Tooltip key={key}>
                <TooltipTrigger asChild>
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    <div className="h-8 w-8 transform transition-transform ease-in-out hover:scale-110">
                      {src ? (
                        <Image priority src={src} alt={alt} layout="fill" objectFit="contain" />
                      ) : (
                        <PiReadCvLogo className="h-8 w-8" />
                      )}
                    </div>
                  </a>
                </TooltipTrigger>
                <TooltipContent className="rounded-full py-2"
                >
                  <p>{key}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
        </TooltipProvider>
      )
    }