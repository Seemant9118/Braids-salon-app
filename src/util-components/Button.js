"use client"
import { useRouter } from "next/navigation";


export const Button1 = function Button({ path, btnName }) {
    const router = useRouter();
    return (
        <div className="lg:w-28 md:w-24 md:h-14 sm:w-24 sm:h-12 w-20 h-14 sm:text-base text-sm bg-[#efebeb] flex justify-center items-center text-btnColor transition ease-in-out delay-150 hover:bg-[#f4f3f3] hover:cursor-pointer" onClick={() => router.push(`/${path}`)}>
            {btnName}
        </div>
    )
}

export const Button2 = function Button2({ path, btnName }) {
    const router = useRouter();

    return (
        <div className="lg:w-28 md:w-24 md:h-14 sm:w-24 sm:h-12 w-20 h-14 sm:text-base text-sm bg-btnColor flex justify-center items-center text-white transition ease-in-out delay-150 hover:bg-[#869787] hover:cursor-pointer" onClick={() => router.push(`/${path}`)}>
            {btnName}
        </div>
    )
}

export const Button3 = function Button2({ path, btnName }) {
    const router = useRouter();

    return (
        <div className="lg:w-28 md:w-24 md:h-14 sm:w-24 sm:h-12 w-20 h-14 sm:text-base text-sm bg-transparent flex justify-center items-center text-black border border-black transition ease-in-out delay-150 hover:bg-[#cecdce] hover:cursor-pointer" onClick={() => router.push(`/${path}`)}>
            {btnName}
        </div>
    )
}