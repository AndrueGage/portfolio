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
        <Card className="sm:col-span-2 rounded-xl mb-6 flex flex-col" x-chunk="charts-01-chunk-0">
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
            <CardContent>
                <div className="sm:text-center lg:text-left md:text-left">
                    <p className="text-xl leading-10 text-center sm:text-left lg:text-left md:text-left">
                        A full stack developer from Nashville, TN.<br />
                    </p>
                </div>
            </CardContent>
            <CardFooter className="flex-col items-start gap-1 sm:text-center relative">
                <CardDescription className="mt-2 max-w-2xl sm:text-center text-balance leading-relaxed">
                    Solving problems and creating solutions.
                </CardDescription>
                <div className="pt-3">
                    <Footer />
                </div>
            </CardFooter>
        </Card>
    )
}