import React from 'react'
import "./rack.css"
import img0 from "./foto/0.jpg"

const Rack = () => {
    const render =
        <div className="bg-gray-400">
            <h4 className="font-bold bg-red-400">RACK</h4>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 xs:grid-cols-1 gap-2">

                <div className="bg-red-300 rounded-md xs:h-full md:h-5/6 lg:h-3/4 m-2 w-auto">
                    <img
                        src={img0}
                        alt="Revolutionizing Our Production Process"
                        className="object-cover h-5/6 xs:h-48 p-2"/>
                    <div className="h-auto">
                        <span className="font-bold h-auto">555555555555555</span>
                        <span className="block text-gray-600 text-sm h-auto">XXXXXXXXXXXXXXXXXXX</span>
                    </div>
                </div>

                <div className="bg-red-300 rounded-md xs:h-full md:h-5/6 lg:h-3/4 m-2 w-auto">
                    <img
                        src={img0}
                        alt="Revolutionizing Our Production Process"
                        className="object-cover h-5/6 xs:h-48 p-2"/>
                    <div className="h-auto">
                        <span className="font-bold h-auto">555555555555555</span>
                        <span className="block text-gray-600 text-sm h-auto">XXXXXXXXXXXXXXXXXXX</span>
                    </div>
                </div>

                <div className="bg-red-300 rounded-md xs:h-full md:h-5/6 lg:h-3/4 m-2 w-auto">
                    <img
                        src={img0}
                        alt="Revolutionizing Our Production Process"
                        className="object-cover h-5/6 xs:h-48 p-2"/>
                    <div className="h-auto">
                        <span className="font-bold h-auto">555555555555555</span>
                        <span className="block text-gray-600 text-sm h-auto">XXXXXXXXXXXXXXXXXXX</span>
                    </div>
                </div>

                <div className="bg-red-300 rounded-md xs:h-full md:h-5/6 lg:h-3/4 m-2 w-auto">
                    <img
                        src={img0}
                        alt="Revolutionizing Our Production Process"
                        className="object-cover h-5/6 xs:h-48 p-2"/>
                    <div className="h-auto">
                        <span className="font-bold h-auto">555555555555555</span>
                        <span className="block text-gray-600 text-sm h-auto">XXXXXXXXXXXXXXXXXXX</span>
                    </div>
                </div>

                <div className="bg-red-300 rounded-md xs:h-full md:h-5/6 lg:h-3/4 m-2 w-auto">
                    <img
                        src={img0}
                        alt="Revolutionizing Our Production Process"
                        className="object-cover h-5/6 xs:h-48 p-2"/>
                    <div className="h-auto">
                        <span className="font-bold h-auto">555555555555555</span>
                        <span className="block text-gray-600 text-sm h-auto">XXXXXXXXXXXXXXXXXXX</span>
                    </div>
                </div>

                <div className="bg-red-300 rounded-md xs:h-full md:h-5/6 lg:h-3/4 m-2 w-auto">
                    <img
                        src={img0}
                        alt="Revolutionizing Our Production Process"
                        className="object-cover h-5/6 xs:h-48 p-2"/>
                    <div className="h-auto">
                        <span className="font-bold h-auto">555555555555555</span>
                        <span className="block text-gray-600 text-sm h-auto">XXXXXXXXXXXXXXXXXXX</span>
                    </div>
                </div>


            </div>
        </div>

    return (
        <div className="h-auto">
            {render}
        </div>
    )
}

export default Rack