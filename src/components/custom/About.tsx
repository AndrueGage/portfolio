"use client"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Footer from "./Footer"
import Picture from "./Image"

export default function About() {
    return (
        <Card className="sm:col-span-2 rounded-xl mb-4 flex flex-col" x-chunk="charts-01-chunk-0">
                <CardHeader className="space-y-0 pb-2">
                    <div className="flex flex-col sm:flex-row items-center sm:space-x-4">
                        <div className="flex justify-center">
                            <Picture />
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <CardTitle className="text-4xl sm:text-6xl font-bold">Andrue Desmarais</CardTitle>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="p-4 pr-0">
                    <div className="sm:text-center lg:text-left md:text-left">
                        <p className="text-xl leading-10 text-center sm:text-left lg:text-left md:text-left">
                            A full stack developer from Nashville, TN.
                        </p>
                    </div>
                </CardContent>
                <CardFooter className="p-4 pt-0 flex-col items-start gap-2 sm:text-center sm:justify-center sm:flex relative">
                    <CardDescription className="flex max-w-2xl sm:text-center text-balance leading-relaxed">
                        Solving problems and creating solutions.
                    </CardDescription>
                    <div className="pt-3">
                        <Footer />
                    </div>
                </CardFooter>
        </Card>
    )
}