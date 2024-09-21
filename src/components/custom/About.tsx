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

        <Card className="sm:col-span-2 max-w-2xl mb-6" x-chunk="charts-01-chunk-0">
            <CardHeader className="space-y-0 pb-2">
                <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4">
                    <Picture />
                    <CardTitle className="text-4xl sm:text-6xl font-bold text-center sm:text-left">Andrue Desmarais</CardTitle>
                </div>
            </CardHeader>
            <CardContent>
                <div className="sm:text-center lg:text-left md:text-left">
                    <p className="text-xl leading-10">
                        A full stack developer from Nashville, TN.<br />
                    </p>
                </div>
            </CardContent>
            <CardFooter className="flex-col items-start gap-1 relative">
                <CardDescription>
                    Solving problems and creating solutions.
                </CardDescription>
                <div className="pt-3">
                    <Footer />
                </div>
            </CardFooter>

        </Card>

    )
}
