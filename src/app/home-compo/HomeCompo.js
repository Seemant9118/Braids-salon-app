"use client"

import Image from "next/image";
import { Typography } from "@material-tailwind/react";
import {Button1,Button2,Button3} from "@/util-components/Button";
import Navbar from "@/util-components/Navbar";
import Footer from "@/util-components/Footer";
import Review from "@/util-components/Review";
import braids1 from "../../../assets/braids1.jpg";
import braids2 from "../../../assets/braids2.jpg";
import location from "../../../assets/location.jpg";


export default function HomeCompo() {

    return (
        <>
            <Navbar/>

            {/* Hero */}
            <div className="grid min-h-[82vh] w-full lg:h-[54rem] md:h-[34rem] bg-brading-hero bg-center bg-cover ">
                <div className="container mx-auto px-4 text-center flex flex-col justify-center items-center">
                    <Typography
                        variant="h1"
                        className="mx-auto my-6 w-full text-white leading-snug !text-2xl lg:max-w-3xl lg:!text-5xl"
                    >
                        Get ready to experience our amazing{" "}
                        <span className="text-yellow-500 leading-snug ">
                            services
                        </span>
                    </Typography>
                    <Typography
                        variant="lead"
                        className="mx-auto w-full !text-gray-200 lg:text-lg text-base"
                    >
                        The time is now for it to be okay to be great. For being a bright
                        color. For standing out.
                    </Typography>
                    <div className="mt-8 grid w-full justify-center">
                        <div className="mb-2 flex w-full flex-col gap-4 md:flex-row">
                            <Button1 path="" btnName="Book Now" />
                            <Button1 path="" btnName="Check Services" />
                        </div>
                    </div>
                </div>
            </div>

            {/* combine components */}
            <div className="bg-primary h-full w-full lg:px-10 md:px-5 px-2 py-5 flex md:flex-row flex-col md:gap-0 gap-5">
                <div id="serviceImg" className="flex-1 w-full">
                    <Image src={braids1} alt="img" />

                </div>
                <div id="serviceDesc" className="flex-1 gap-2 flex flex-col justify-center items-center text-white">
                    <div className="w-2/3 lg:text-6xl md:text-4xl sm:text-2xl text-base font-bold">Our Services</div>
                    <div className="w-2/3 lg:text-xl md:text-l sm:text-base text-sm">Whether you’re coming in for a haircut, coloring, extensions, treatment, or event updo, our stylists take the time to understand your unique needs</div>
                    <div className="w-2/3">
                        <Button1 path="" btnName="Services" />
                    </div>
                </div>
            </div>

            {/* combine components 2 */}
            <div className="bg-white h-full w-full lg:px-10 md:px-5 px-2 py-5 flex md:flex-row flex-col md:gap-0 gap-5">
                <div id="serviceDesc" className="flex-1 gap-2 flex flex-col justify-center items-center text-black">
                    <div className="w-2/3 lg:text-6xl md:text-4xl sm:text-2xl text-base font-bold">Book an appointement</div>
                    <div className="w-2/3 lg:text-xl md:text-l sm:text-base text-sm">Whether you’re coming in for a haircut, coloring, extensions, treatment, or event updo, our stylists take the time to understand your unique needs</div>
                    <div className="w-2/3">
                        <Button2 path="" btnName="Book Now" />
                    </div>
                </div>
                <div id="serviceImg" className="flex-1 w-full">
                    <Image src={braids2} alt="img" />

                </div>
            </div>

            {/* Reviews Component*/}
            <Review />

            {/* Our Location */}
            < div className="bg-white h-full w-full lg:px-10 md:px-5 px-2 py-5 flex lg:flex-row flex-col md:gap-0 gap-5" >
                <div id="serviceImg" className="flex-1 w-full">
                    <Image  src={location}  alt="img"/>
                </div>
                <div id="serviceDesc" className="flex-1 gap-4 flex flex-col justify-center items-center text-black">
                    <div className="w-2/3 lg:text-6xl md:text-4xl sm:text-2xl text-base">Our Location</div>
                    <div className="w-2/3 lg:text-xl md:text-l sm:text-base text-sm font-semibold">1234, KO , IN - Dummy address
                    </div>
                    <div className="w-2/3 lg:text-xl md:text-l sm:text-base text-sm">Open Daily, 9:00AM - 5:00PM</div>
                    <div className="w-2/3">
                        <Button3 path="" btnName="Directions" />
                    </div>
                </div>
            </div >
            {/* Footer */}
            < Footer />
        </>
    )
}
