"use client";

import { useState } from "react";
import HairSpecific from "./HairSpecific";


export default function HairService() {

    const hairServices = [
        {
            id: 1, name: 'Braiding', Options: [
                'Large Knotless Braids',
                'Large Knotless Goddess Braids',
                'Large Knotless H20 Curls Braids',
                'Large Regular Braids',
                'Marley Twist Braids',
                'Medium Box Braids',
                'Medium Knotless Braids',
                'Medium Knotless Boho Braids',
                'Medium Knotless H20 Curls Braids',
                'Medium Layered Feed-in Braids',
                'Medium Pick and Drop Braids',
                'Passion Twist Braids',
                'Regular Medium Boho Braids',
                'Senegalese Twist Braids',
                'Small Box Braids',
                'Small Knotless Braids',
                'Small Knotless Boho Braids',
                'Small Layered Feed-in Braids',
                'Small Pick and Drop Braids',
                'Small-Medium Box Braids',
                'Small-Medium Knotless Braids',
                'Spring Twist Braids'
            ],
        },
        {
            id: 2, name: 'Locs', Options: [
                "Soft Locs",
                "Full Locs",
                "Butterfly Locs"
            ],
        },
        {
            id: 3, name: 'Crochet', Options: [
                "Weave/invisible",
                "Medium braids",
                "Small crochet braids"
            ]
        },
        {
            id: 4, name: 'Kid under 10', Options: [
                "Medium (20 inches)",
                "Large",
                "Jumbo braid"
            ]
        },
        {
            id: 5, name: 'Sew-In', Options: [
                "Traditional sew in",
                "Glue-less closure sew in",
                "Closure sew in",
                "Frontal sew in",
                "Synthetic wig sew in",
                "Human hair wig sew in"
            ]
        },
        { id: 6, name: 'Braids Takedown (Unbraiding)', Options: ["Unbraiding"] },
    ];


    const [selectedOption, setSelectedOption] = useState("");

    const handleOption = (option) => {
        setSelectedOption(option);
    }
    // console.log(selectedOption);

    return (
        <div className="mt-10 space-y-10 px-10">
            <fieldset>
                <legend className="text-sm font-semibold leading-6 text-gray-900">2. Which hair service do you prefer? </legend>
                <div className="mt-6 space-y-6">
                    <div className="relative flex flex-col">
                        {
                            hairServices.map((hservice) => (
                                <div key={hservice.id} className="flex gap-2">
                                    <div className="flex h-6 items-center">
                                        <input
                                            id={hservice.id}
                                            name="Hair Service"
                                            type="radio"
                                            className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-blue-600 hover:cursor-pointer"
                                            onChange={() => handleOption(hservice)}
                                        />
                                    </div>
                                    <div className="text-sm leading-6 ">
                                        <label htmlFor="comments" className="font-medium text-gray-900 hover:cursor-text">
                                            {hservice.name}
                                        </label>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </fieldset>
            <HairSpecific optionsList={selectedOption} />
        </div>
    )
}