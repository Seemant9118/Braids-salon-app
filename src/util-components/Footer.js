"use client";
import { useRouter } from 'next/navigation';
import Image from 'next/image'


export default function Footer() {
    const router = useRouter();

    const icons = [
        { id: 1, title: 'Facebook', icon: '', path: '' },
        { id: 2, title: 'Twitter', icon: '', path: '' },
        { id: 3, title: 'Instagram', icon: '', path: '' },
    ];

    const solutionsList = [
        { title: 'Marketing', path: '' },
        { title: 'Analytics', path: '' },
        { title: 'Commerce', path: '' },
        { title: 'Insight', path: '' },

    ]

    return (
        <div className="border-t-2 border-slate-100 h-1/2 grid lg:grid-cols-6 lg:px-10 md:px-5 px-2 sm:py-24 py-5" >
            <div className="col-span-2 flex flex-col justify-center gap-2">
                <div className='w-1/2 object-cover '>
                    <h1 className="lg:text-6xl md:text-5xl sm:text-2xl text-xl font-bold">Braids</h1>
                </div>

                <div id="caption" className=" w-full text-slate-800">Salon Co-operative and Creative Space</div>
                <div id="iconList" className=" w-full">
                    <ul className='list-none flex gap-16 sm:text-base text-xs'>
                        {
                            icons.map((icon) => (<li key={icon.id} className="w-8">{icon.title}</li>))
                        }
                    </ul>
                </div>
                <div className="w-full text-xs text-slate-800 ">
                    Copyright © 2024, Braids. All rights reserved. See our terms of use and privacy notice.
                </div>
            </div>

            <div className='flex flex-col justify-center gap-4'>
                <div className='font-bold '>Solution</div>
                <ul className="flex flex-col gap-3">
                    {
                        solutionsList.map((solItem) => (
                            <li key={solItem.title} className="text-slate-800 hover:text-black hover:cursor-pointer" >{solItem.title}</li>
                        ))
                    }
                </ul>
            </div>

            <div className=' flex flex-col justify-center gap-4'>
                <div className='font-bold '>Solution1</div>
                <ul className="flex flex-col gap-3">
                    {
                        solutionsList.map((solItem) => (
                            <li key={solItem.title} className="text-slate-800 hover:text-black hover:cursor-pointer" >{solItem.title}</li>
                        ))
                    }
                </ul>
            </div>

            <div className='flex flex-col justify-center gap-4'>
                <div className='font-bold '>Solution2</div>
                <ul className="flex flex-col gap-3">
                    {
                        solutionsList.map((solItem) => (
                            <li key={solItem.title} className="text-slate-800 hover:text-black hover:cursor-pointer" >{solItem.title}</li>
                        ))
                    }
                </ul>
            </div>

            <div className='flex flex-col justify-center gap-4'>
                <div className='font-bold '>Solution3</div>
                <ul className="flex flex-col gap-3">
                    {
                        solutionsList.map((solItem) => (
                            <li key={solItem.title} className="text-slate-800 hover:text-black hover:cursor-pointer" >{solItem.title}</li>
                        ))
                    }
                </ul>
            </div>
        </div>

    )
}