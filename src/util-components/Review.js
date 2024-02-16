"use client"


export default function Review() {
    const reviews = [
        { id: 1, userName: 'John', review: '4.3', desc: 'This Salon is Best for Hair brading and love the experience' },
        { id: 2, userName: 'Ketty', review: '4.0', desc: 'This Salon is Best for Hair brading and love the experience' },
        { id: 3, userName: 'Ryan', review: '4.1', desc: 'This Salon is Best for Hair brading and love the experience' },
        { id: 4, userName: 'Robert', review: '3.5', desc: 'This Salon is Best for Hair brading and love the experience' },
    ];


    return (
        <div className="h-full w-full lg:px-10 md:px-5 px-2  flex flex-col py-10 bg-[#51270f] my-10">
            <div className="w-full text-center lg:text-6xl md:text-4xl sm:text-2xl text-base pb-5 text-white">Our Happy<span className="text-yellow-500"> Customers</span></div>
            <div id="cards" className="grid lg:grid-cols-4 lg:grid-rows-1 md:grid-cols-2 md:grid-rows-2 sm:grid-cols-1 sm:grid-rows-4 gap-2">
                {
                    reviews.map((item) => (
                        <div key={item.id} className="border-2 border-slate-200 bg-white rounded-xl w-full flex flex-col gap-5 p-8 hover:shadow-lg" >
                            <div id="user" className="">{item.userName}</div>
                            <div id="ratings" className="text-green-300">{item.review}/5</div>
                            <div id="desc" className="text-slate-800 text-xs" >{item.desc}</div>
                        </div>
                    ))
                }
            </div>
        </div >
    )
}