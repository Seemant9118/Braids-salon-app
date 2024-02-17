import Navbar from "@/util-components/Navbar";
import Image from "next/image";
import Gallery1 from '../../../assets/Gallery1.jpg';
import Gallery2 from '../../../assets/Gallery2.jpg';
import Gallery3 from '../../../assets/Gallery3.jpg';
import Gallery4 from '../../../assets/Gallery4.jpg';
import Gallery5 from '../../../assets/Gallery5.jpg';
import Gallery6 from '../../../assets/Gallery6.jpg';
import Footer from "@/util-components/Footer";
import Review from "@/util-components/Review";


export default function Gallery() {
    return (
        <>
            <Navbar />

            <div className="lg:px-10 md:px-5 px-2 pt-2 pb-2 mb-10">
                <div className="w-full lg:text-6xl md:text-5xl sm:text-4xl min-[450px]:text-2xl text-lg font-bold my-10 flex justify-center items-center">Gallery</div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 ">
                    <div className="grid grid-rows-4 gap-4">
                        <div className="row-span-2">
                            <Image
                                className="h-full w-full rounded-lg object-cover"
                                src={Gallery1}
                                alt=""
                            />
                        </div>
                        <div>
                            <Image
                                className="h-full w-full rounded-lg object-cover"
                                src={Gallery2}
                                alt=""
                            />
                        </div>
                        <div>
                            <Image
                                className="h-full w-full rounded-lg object-cover"
                                src={Gallery3}
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="grid grid-rows-4 gap-4">
                        <div>
                            <Image
                                className="h-full w-full rounded-lg object-cover"
                                src={Gallery4}
                                alt=""
                            />
                        </div>
                        <div className="row-span-2">
                            <Image
                                className="h-full w-full rounded-lg object-cover"
                                src={Gallery5}
                                alt=""
                            />
                        </div>
                        <div>
                            <Image
                                className="h-full w-full rounded-lg object-cover"
                                src={Gallery6}
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="grid grid-rows-4 gap-4 ">
                        <div>
                            <Image
                                className="h-full w-full rounded-lg object-cover"
                                src={Gallery3}
                                alt=""
                            />
                        </div>
                        <div>
                            <Image
                                className="h-full w-full rounded-lg object-cover"
                                src={Gallery2}
                                alt=""
                            />
                        </div>
                        <div className="row-span-2">
                            <Image
                                className="h-full w-full rounded-lg object-cover"
                                src={Gallery1}
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="grid grid-rows-4 gap-4">
                        <div className="row-span-2">
                            <Image
                                className="h-full w-full rounded-lg object-cover"
                                src={Gallery6}
                                alt=""
                            />
                        </div>
                        <div>
                            <Image
                                className="h-full w-full rounded-lg object-cover"
                                src={Gallery5}
                                alt=""
                            />
                        </div>
                        <div>
                            <Image
                                className="h-full w-full rounded-lg object-cover"
                                src={Gallery4}
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>

            <Review/>
            
            <Footer/>

        </>

    )
}