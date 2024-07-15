import { ReactNode } from "react"

interface PageContainerProps{ 
    children: ReactNode;
}

export default function PageContainer({children}: PageContainerProps) {
    return(
    <main className="p-8">
        {children}
    </main>
)}