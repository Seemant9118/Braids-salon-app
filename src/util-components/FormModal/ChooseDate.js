"use client"

import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

export default function ChooseDate() {
    const [startDate, setStartDate] = useState(new Date());
    // console.log(startDate);

    return (
        <div className="h-full flex flex-col px-5 gap-4 ">
            <h1 className="text-sm font-bold">3. When do you require this services?</h1>
            <div className="h-80 p-10 flex  flex-col justify-start items-center gap-2">
                <div className="font-semibold text-primary">Choose Date</div>
                <DatePicker
                    showIcon
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                />
            </div>
        </div>
    )
}