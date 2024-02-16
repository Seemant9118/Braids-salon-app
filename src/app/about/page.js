"use client"

import Footer from "@/util-components/Footer";
import Navbar from "@/util-components/Navbar";
import Card from "@/util-components/Card";
import Redirection from "@/util-components/Redirection";


export default function About() {

    const cardItem = [
        { id: 1, cardName: "A Legacy of Braiding Mastery", cardDesc: "Yaa Dantoah, a matriarch in every sense, instilled the art of braiding in our family, ensuring that every female member learned the skill. She would effortlessly braid while singing, and her captivating melodies would enchant everyone around her. Her legacy of beauty and grace through braiding lives on in our hearts and craftsmanship" },
        { id: 2, cardName: "Honoring Tradition with Excellence", cardDesc: "While we may not possess her mesmerizing singing talent, we honor her memory by infusing our work with the same love, respect, and dedication to the art of braiding. At African Braids, we strive to extend Yaa Dantoah's legacy of excellence and embrace every client with warmth and inclusivity" },
        { id: 3, cardName: "Craftsmanship and Innovation", cardDesc: "With years of experience and a deep-rooted respect for tradition, we bring forth an innovative approach to hair braiding. Our dedication to perfecting this craft ensures that each braid we create is a masterpiece that reflects not only our skills but also the rich heritage from which it originated" },
        { id: 4, cardName: "Embracing Diversity and Individuality", cardDesc: "At African Braids, we've witnessed the power of braiding to celebrate diversity and individuality. From classic styles to modern trends, we've seen it all. Our commitment is to accommodate every unique preference, ensuring that each client leaves adorned with a style that resonates with their personality and story" }
    ];

    return (
        <>
            <Navbar />
            {/* main */}
            <div className="sm:h-[70vh] h-[80vh] w-full lg:px-10 md:px-5 px-2 pt-2 pb-2 grid sm:grid-cols-2 sm:grid-rows-1 grid-rows-2 grid-cols-1 gap-2">
                <div id="desc" className=" h-full flex flex-col justify-center items-start gap-2">
                    <div id="head" className="w-full lg:text-5xl md:text-3xl sm:text-xl text-base font-bold">About African Braids </div>
                    <div id="descc" className="w-full md:text-base text-sm" >Welcome to African Braids, where the art of braiding is more than just a service; its a cherished family tradition that spans generations. Our roots trace back to the legacy of our great-grandmother, Yaa Dantoah, in Ghana, West Africa, where the intricate art of braiding was passed down through the matriarchs of our family.</div>
                </div>
                <div className="h-full justify-center items-center">
                    <div id="img" className="rounded-3xl h-full w-full bg-brading-hero bg-cover bg-center shadow-xl shadow-gray-400 ">
                    </div>
                </div>
            </div>

            {/* cards brading details */}
            <div className="border-t-2 border-slate-100 flex justify-center items-center lg:px-10 md:px-5 px-2 pt-10 mt-10 lg:text-5xl md:text-3xl sm:text-xl text-base font-bold">More Insights</div>
            <div className="lg:px-10 md:px-5 px-2 pt-10 pb-2 mb-10 grid sm:grid-rows-2 sm:grid-cols-2 grid-rows-4 grid-cols-1 gap-y-5 lg:gap-x-0 gap-x-5">
                {
                    cardItem.map((item) => (
                        <div key={item.id} className="flex justify-center items-center"><Card cardName={item.cardName} cardDesc={item.cardDesc} /></div>
                    ))
                }
            </div>

            {/* Join Us component*/}
            <Redirection/>
            
            <Footer />
        </>
    )
}