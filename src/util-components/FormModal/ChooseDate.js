"use client"


export default function ChooseDate(props) {
    const {data,handleChange} = props;

    return (
        <div className="h-full flex flex-col px-5 gap-4 ">
            <h1 className="text-sm font-bold">3. When do you require this services?</h1>
            <div className="h-80 p-10 flex  flex-col justify-start items-center gap-2">
                <div className="font-semibold text-primary">Choose Date</div>
                <input
                    type="date"
                    name="date"
                    onChange={handleChange}
                />
            </div>
        </div>
    )
}