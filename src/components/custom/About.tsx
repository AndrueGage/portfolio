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
                                <h3 className="text-2xl lg:text-4xl mt-5 font-bold">About</h3>
                                <p className="text-xl leading-10">
                                    My name is Andrue, and I am a full stack developer from Nashville, TN.<br></br>
                                    I am a purposeful professional with six years of experience as a successful dog trainer,
                                    showcasing a proven track record of managing a business with 30+ employees. Leveraging a
                                    deep understanding of learning theory, I consistently achieved exceptional results in
                                    canine behavior modification. Eager to transition into the dynamic field of Information
                                    Technology, I completed the Full Stack Developer Bootcamp at Vanderbilt University,
                                    demonstrating a commitment to enhancing the technical skills required for this industry.
                                    Possessing a unique blend of leadership, problem-solving, and adaptability, I am poised to
                                    bring a fresh perspective and a strong work ethic to the IT sector, capitalizing on my
                                    diverse background to drive success in new and challenging environments.
                                </p>
                            </div>
                        </section>
                    </CardContent>
                    <CardFooter className="flex-col items-start gap-1">
                        <CardDescription>
                            Ready to take on new challenges in the tech world!
                        </CardDescription>
                    </CardFooter>
                </Card>
            </div>
        </section>
    )
}