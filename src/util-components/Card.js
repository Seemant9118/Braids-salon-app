"use client"


export default function Card({ cardName, cardDesc }) {
    return (
        <div className="sm:h-[70vh] h-[50vh] w-[70vh] p-5 flex items-end bg-brading-hero bg-center bg-cover opacity-75 hover:opacity-100 hover:cursor-pointer hover:shadow-xl  hover:scale-105 rounded-3xl">
            <div className="h-full flex flex-col pb-2">
                <div id="heading" className="h-1/4 lg:text-3xl md:text-2xl sm:text-xl text-base font-semibold text-slate-300">
                    {cardName}
                </div>
                <div id="desc" className="h-3/4 md:text-sm text-xs text-slate-200 flex items-end">
                    {cardDesc}
                </div>
            </div>
        </div>
    )
}