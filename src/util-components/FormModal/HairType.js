"use client"

export default function HairType() {
    const hairTypes = [
        { id: 1, name: 'African Hair' },
        { id: 2, name: 'Asian Hair' },
        { id: 3, name: 'Caucasian Hair' },
        { id: 4, name: 'Mixed or Multiracial Hair' },
    ];

    return (
        <div className="mt-10 space-y-10 px-10">
            <fieldset>
                <legend className="text-sm font-semibold leading-6 text-gray-900">1. We love how diverse hair can be, what is your Natural Hair Texture?</legend>
                <div className="mt-6 space-y-6">
                    <div className="relative flex flex-col">
                        {
                            hairTypes.map((htype) => (
                                <div key={htype.id} className="flex gap-2">
                                    <div className="flex h-6 items-center">
                                        <input
                                            id={htype.id}
                                            name={htype.name}
                                            type="checkbox"
                                            className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-blue-600 hover:cursor-pointer"
                                        />
                                    </div>
                                    <div className="text-sm leading-6 ">
                                        <label htmlFor="comments" className="font-medium text-gray-900 hover:cursor-text">
                                            {htype.name}
                                        </label>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                    <div className="mt-2">
                        <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                            Could  you tell us more about your hair texture?
                        </label>
                        <div className="mt-2">
                            <textarea
                                id="about"
                                name="about"
                                rows={3}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                                defaultValue={''}
                            />
                        </div>
                    </div>
                </div>
            </fieldset>
        </div>
    )
}