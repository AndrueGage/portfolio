"use client"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"


export default function About() {
    return (
        <section id="about">
            <div className=" sm:text-center lg:text-left md:text-left ">
                <Card className="lg:max-w-md" x-chunk="charts-01-chunk-0">
                    <CardHeader className="space-y-0 pb-2">
                        <CardDescription></CardDescription>
                        <CardTitle className="text-6xl font-bold">Andrue Desmarais</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <section id="about">
                            <div className="sm:text-center lg:text-left md:text-left">
                                <p className="text-xl leading-10">
                                    A full stack developer from Nashville, TN.<br></br>
                                </p>
                            </div>
                        </section>
                    </CardContent>
                    <CardFooter className="flex-col items-start gap-1">
                        <CardDescription>
                            Solving problems and creating solutions.
                        </CardDescription>
                    </CardFooter>
                </Card>
            </div>
        </section>
    )
}