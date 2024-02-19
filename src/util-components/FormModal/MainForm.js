"use client"

import Image from "next/image"
import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import close from '../../../assets/close.png';
import HairType from "./HairType";
import HairService from "./hair-service/HairService";
import ChooseDate from "./ChooseDate";
import EmailandName from "./EmailandName";
import FinalConfirmation from "./FinalConfirmation";

export default function MainForm({handleForm}) {

    const [open, setOpen] = useState(true);
    const [data, setData] = useState({
        hairType: "",
        hairService:"",
        hairServicePattern:"",
        date: "",
        email: "",
        name: "",
        number: "",
    });
    const [activeTab, setActiveTab] = useState(0);

    const cancelButtonRef = useRef(null);

    const handleOpenModal = () => {
        handleForm();
        setOpen(!open);
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    }

    const MultiStepFormElements = [
        <HairType data={data} handleChange={handleChange} />,
        <HairService data={data} handleChange={handleChange} />,
        <ChooseDate data={data} handleChange={handleChange} />,
        <EmailandName data={data} handleChange={handleChange} />,
        <FinalConfirmation data={data} handleChange={handleChange} />,
    ];


    function finalSubmission (){
        alert(data.name +", we recieve your request! Thank You❤️");
        handleForm();
    }

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-30" initialFocus={cancelButtonRef} onClose={handleOpenModal}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-1/2 sm:h-1/2 w-full h-full">
                                {/* Modal Heading */}
                                <div className="sticky top-0 pl-5">
                                    <div className="bg-white text-black h-16 flex ">
                                        <div className="flex-1 flex justify-start items-center">
                                            <h1 className="font-bold lg:text-sm text-xs">We Need Your Preferences details!</h1>
                                        </div>
                                        <div className="flex-1 flex justify-end items-center ">
                                            <Image src={close} onClick={handleForm} alt="" className="h-1/3 w-16 object-contain cursor-pointer" />
                                        </div>
                                    </div>
                                </div>


                                {/* Modal Multi-step form*/}
                                <div>
                                    {MultiStepFormElements[activeTab]}
                                </div>

                                {/* Modal button controllers */}
                                <div className="border-2bg-gray-50 py-3 flex flex-row-reverse px-10 gap-2 sm:justify-start justify-center">
                                    {
                                        activeTab === MultiStepFormElements.length - 1 ?
                                            <button className='px-4 py-2 rounded bg-green-600 text-white' onClick={() => finalSubmission()}>Send</button>
                                            :
                                            <button
                                                type="button"
                                                disabled={activeTab === MultiStepFormElements.length - 1 ? "disabled" : ""}
                                                className={`flex justify-center rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm  ${activeTab === MultiStepFormElements.length - 1 ? "opacity-50 bg-slate-600 hover:cursor-not-allowed" : "opacity-100 hover:bg-blue-400"}`}
                                                onClick={() => setActiveTab(prev => prev + 1)}
                                            >
                                                Next
                                            </button>
                                    }
                                    <button
                                        type="button"
                                        disabled={activeTab === 0 ? "disabled" : ""}
                                        className={`flex justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300  ${activeTab === 0 ? "opacity-50 bg-slate-600 hover:cursor-not-allowed" : "opacity-100 hover:cursor-pointer hover:bg-gray-100"}`}
                                        onClick={() => setActiveTab(prev => prev - 1)}
                                    >
                                        Back
                                    </button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>

            </Dialog>
        </Transition.Root>
    )
}
