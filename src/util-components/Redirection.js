"use client"

import {Button1} from "@/util-components/Button";



export default function Redirection() {
    return(
        <div className=" bg-[#51270f] py-24 lg:px-10 md:px-5 px-2  flex flex-col justify-center items-center">
            <div className=" w-full flex flex-col items-center gap-4">
                <p className="mt-2 text-white md:text-5xl sm:text-3xl text-xl font-bold text-center">Join Us on a Journey of <span className="text-yellow-500">Tradition</span> and <span className="text-yellow-500">Beauty</span></p>
                <p className="mt-6 mb-5 text-slate-300 lg:text-lg md:text-base text-sm leading-8 text-center">At African Braids, our passion for braiding is deeply rooted in family traditions and a commitment to excellence. Join us on this journey where the echoes of Ya legacy blend seamlessly with our expertise, creating unforgettable braided styles that honor the past and celebrate the present.</p>
                <Button1 path="contact" btnName="Contact Us" />
                <p className="mt-1 text-slate-300 md:text-base text-sm ">Contact us today to experience the artistry, tradition, and innovation of African Braids firsthand. Let us weave your story into a masterpiece of braided beauty.</p>
            </div>
        </div>
    );
}
