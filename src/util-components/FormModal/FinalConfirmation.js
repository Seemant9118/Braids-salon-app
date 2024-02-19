"use client"


export default function FinalConfirmation(props) {
    const {data,handleChange} = props;

    return(
        <div className="border-2 p-5 flex flex-col gap-2">
            <div className="text-2xl font-bold">{`Great ${data.name} 🎉, let's Send Your request`}</div>
            <div id="invoice" className="">
                {/* We can add invoice here! */}
                
            </div>
            <span className="text-green-600 font-bold text-sm border border-green-400 rounded-lg p-5">Braids Studio , Typically responds in 2 hours</span>
        </div>
    )
}