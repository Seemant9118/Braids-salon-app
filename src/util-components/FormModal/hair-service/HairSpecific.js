"use client"
import { useState } from "react";
export default function HairSpecific({ optionsList }) {

    const option = optionsList;


    return (
        // dropdown
        <div className="sm:col-span-3">
            {option !== "" && <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                Choose <span className="text-primary">{option.name} </span> type :
            </label>}
            <div className="mt-2">
                {
                    option !== "" &&
                    <select
                        id="country"
                        name="country"
                        autoComplete="country-name"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                        {
                            option !== "" && option.Options !== "" ?
                                option.Options.map((item) => (
                                    <option key={item} > {item}</option>
                                ))
                                : ""
                        }
                    </select>
                }
            </div>
        </div>
    )
}
