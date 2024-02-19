"use client";

import Image from "next/image";
import { Typography } from "@material-tailwind/react";
import { Button1, Button2, Button3 } from "@/util-components/Button";
import Navbar from "@/util-components/Navbar";
import Footer from "@/util-components/Footer";
import Review from "@/util-components/Review";
import braids1 from "../../../assets/braids1.jpg";
import braids2 from "../../../assets/braids2.jpg";
import location from "../../../assets/location.jpg";
import { useState } from "react";
import MainForm from "@/util-components/FormModal/MainForm";


export default function HomeCompo() {

    const [isFormOpen, setFormOpen] = useState(false);

    const handleForm = () => {
        setFormOpen(!isFormOpen);
    }

    return (
        <>
            {/* handle Multi step Form Modal */}
            {isFormOpen ? <MainForm handleForm={handleForm} /> : ""}

            <Navbar />

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
                            <button className="lg:w-28 md:w-24 md:h-14 sm:w-24 sm:h-12 w-20 h-14 sm:text-base text-sm bg-[#efebeb] flex justify-center items-center text-btnColor transition ease-in-out delay-150 hover:bg-[#f4f3f3] hover:cursor-pointer" onClick={handleForm}>Book Now</button>
                            <Button1 path="service" btnName="Check Services" />
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
                        <Button1 path="service" btnName="Services" />
                    </div>
                </div>
            </div>

            {/* combine components 2 */}
            <div className="bg-white h-full w-full lg:px-10 md:px-5 px-2 py-5 flex md:flex-row flex-col md:gap-0 gap-5">
                <div id="serviceDesc" className="flex-1 gap-2 flex flex-col justify-center items-center text-black">
                    <div className="w-2/3 lg:text-6xl md:text-4xl sm:text-2xl text-base font-bold">Book an appointment</div>
                    <div className="w-2/3 lg:text-xl md:text-l sm:text-base text-sm">Whether you’re coming in for a haircut, coloring, extensions, treatment, or event updo, our stylists take the time to understand your unique needs</div>
                    <div className="w-2/3">
                        <button className="lg:w-28 md:w-24 md:h-14 sm:w-24 sm:h-12 w-20 h-14 sm:text-base text-sm bg-btnColor flex justify-center items-center text-white transition ease-in-out delay-150 hover:bg-[#869787] hover:cursor-pointer" onClick={handleForm}>Book Now</button>
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
                    <Image src={location} alt="img" />
                </div>
                <div id="serviceDesc" className="flex-1 gap-4 flex flex-col justify-center items-center text-black">
                    <div className="w-2/3 lg:text-6xl md:text-4xl sm:text-2xl text-base font-bold">Our Location</div>
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
