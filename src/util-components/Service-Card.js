

import Image from "next/image"
import defaultImg from '../../assets/defaultImg.jpg';

export default function ServiceCard({title,img=defaultImg,desc}) {
    return (
        <div className="h-96 bg-white border border-gray-200 rounded-lg shadow hover:shadow-xl hover:cursor-pointer">
            <div className="h-1/2"><Image className="rounded-t-lg object-cover w-full h-full" src={img} alt=""/></div>

            <div className="p-5 h-1/2">
                <h5 className="mb-2 sm:text-xl text-2xl font-bold tracking-tight text-gray-900">
                    {title}
                </h5>
                <p className="font-normal lg:text-sm md:text-xs text-base  text-gray-600">
                    {desc}
                </p>
            </div>
        </div>
    )
}