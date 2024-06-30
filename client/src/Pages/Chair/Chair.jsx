import img0 from "./foto/0.jpg"
import img00 from "./foto/00.jpg"
import ReactCardFlip from "react-card-flip"
import {useState} from "react"

const Chair = () => {

    const [isFlipped, setIsFlipped] = useState(false)
    const clickFlipped = () => {
        setIsFlipped(!isFlipped)
        console.log("isFlipped :" ,  isFlipped)
    }

    return (
        <>
            <div className="flex items-center justify-center container mx-auto">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">

                    <ReactCardFlip isFlipped={isFlipped} flipDirection={"horizontal"}>

                        <div className="card h-5/6" >
                            <div className="p-5 flex flex-col">
                                <div className="rounded-xl overflow-hidden xs:h-full">
                                    <img src={img0} alt="" className="h-auto w-auto "/>
                                </div>
                                <h5 className="text-2xl md:text-3xl font-medium mt-1 h-4">1 Camp Batu Gede</h5>
                                <a href="#"
                                   onClick={clickFlipped}
                                   className="h-auto text-center bg-blue-400 text-blue-700 py-2 rounded-lg font-semibold mt-4 hover:bg-blue-300 focus:scale-95 transition-all"
                                >
                                    Click to Foto
                                </a>
                            </div>
                        </div>

                        <div className="card h-5/6" >
                            <div className="p-5 flex flex-col">
                                <div className="rounded-xl overflow-hidden xs:h-full">
                                    <img src={img00} alt="" className="h-auto w-auto "/>
                                </div>
                                <h5 className="text-2xl md:text-3xl font-medium mt-1 h-4">1 Camp Batu Gede</h5>
                                <a href="#"
                                   onClick={clickFlipped}
                                   className="h-auto text-center bg-blue-400 text-blue-700 py-2 rounded-lg font-semibold mt-4 hover:bg-blue-300 focus:scale-95 transition-all"
                                >
                                    Click to Model
                                </a>
                            </div>
                        </div>

                    </ReactCardFlip>

                    <div className="card h-5/6">
                        <div className="p-5 flex flex-col">
                            <div className="rounded-xl overflow-hidden xs:h-full">
                                <img src={img00} alt="" className="h-auto w-auto "/>
                            </div>
                            <h5 className="text-2xl md:text-3xl font-medium mt-1 h-4">1 Camp Batu Gede</h5>
                            <a href="#"
                               className="h-auto text-center bg-blue-400 text-blue-700 py-2 rounded-lg font-semibold mt-4 hover:bg-blue-300 focus:scale-95 transition-all">Explore</a>
                        </div>
                    </div>

                    <div className="card h-5/6">
                        <div className="p-5 flex flex-col">
                            <div className="rounded-xl overflow-hidden xs:h-full">
                                <img src={img0} alt="" className="h-auto w-auto "/>
                            </div>
                            <h5 className="text-2xl md:text-3xl font-medium mt-1 h-4">1 Camp Batu Gede</h5>
                            <a href="#"
                               className="h-auto text-center bg-blue-400 text-blue-700 py-2 rounded-lg font-semibold mt-4 hover:bg-blue-300 focus:scale-95 transition-all">Explore</a>
                        </div>
                    </div>

                    <div className="card h-5/6">
                        <div className="p-5 flex flex-col">
                            <div className="rounded-xl overflow-hidden xs:h-full">
                                <img src={img0} alt="" className="h-auto w-auto "/>
                            </div>
                            <h5 className="text-2xl md:text-3xl font-medium mt-1 h-4">1 Camp Batu Gede</h5>
                            <a href="#"
                               className="h-auto text-center bg-blue-400 text-blue-700 py-2 rounded-lg font-semibold mt-4 hover:bg-blue-300 focus:scale-95 transition-all">Explore</a>
                        </div>
                    </div>

                    <div className="card h-5/6">
                        <div className="p-5 flex flex-col">
                            <div className="rounded-xl overflow-hidden xs:h-full">
                                <img src={img0} alt="" className="h-auto w-auto "/>
                            </div>
                            <h5 className="text-2xl md:text-3xl font-medium mt-1 h-4">1 Camp Batu Gede</h5>
                            <a href="#"
                               className="h-auto text-center bg-blue-400 text-blue-700 py-2 rounded-lg font-semibold mt-4 hover:bg-blue-300 focus:scale-95 transition-all">Explore</a>
                        </div>
                    </div>

                    <div className="card h-5/6">
                        <div className="p-5 flex flex-col">
                            <div className="rounded-xl overflow-hidden xs:h-full">
                                <img src={img0} alt="" className="h-auto w-auto "/>
                            </div>
                            <h5 className="text-2xl md:text-3xl font-medium mt-1 h-4">1 Camp Batu Gede</h5>
                            <a href="#"
                               className="h-auto text-center bg-blue-400 text-blue-700 py-2 rounded-lg font-semibold mt-4 hover:bg-blue-300 focus:scale-95 transition-all">Explore</a>
                        </div>
                    </div>

                    <div className="card h-5/6">
                        <div className="p-5 flex flex-col">
                            <div className="rounded-xl overflow-hidden xs:h-full">
                                <img src={img0} alt="" className="h-auto w-auto "/>
                            </div>
                            <h5 className="text-2xl md:text-3xl font-medium mt-1 h-4">1 Camp Batu Gede</h5>
                            <a href="#"
                               className="h-auto text-center bg-blue-400 text-blue-700 py-2 rounded-lg font-semibold mt-4 hover:bg-blue-300 focus:scale-95 transition-all">Explore</a>
                        </div>
                    </div>

                    <div className="card h-5/6">
                        <div className="p-5 flex flex-col">
                            <div className="rounded-xl overflow-hidden xs:h-full">
                                <img src={img0} alt="" className="h-auto w-auto "/>
                            </div>
                            <h5 className="text-2xl md:text-3xl font-medium mt-1 h-4">1 Camp Batu Gede</h5>
                            <a href="#"
                               className="h-auto text-center bg-blue-400 text-blue-700 py-2 rounded-lg font-semibold mt-4 hover:bg-blue-300 focus:scale-95 transition-all">Explore</a>
                        </div>
                    </div>

                    <div className="card h-5/6">
                        <div className="p-5 flex flex-col">
                            <div className="rounded-xl overflow-hidden xs:h-full">
                                <img src={img0} alt="" className="h-auto w-auto "/>
                            </div>
                            <h5 className="text-2xl md:text-3xl font-medium mt-1 h-4">1 Camp Batu Gede</h5>
                            <a href="#"
                               className="h-auto text-center bg-blue-400 text-blue-700 py-2 rounded-lg font-semibold mt-4 hover:bg-blue-300 focus:scale-95 transition-all">Explore</a>
                        </div>
                    </div>

                    <div className="card h-5/6">
                        <div className="p-5 flex flex-col">
                            <div className="rounded-xl overflow-hidden xs:h-full">
                                <img src={img0} alt="" className="h-auto w-auto "/>
                            </div>
                            <h5 className="text-2xl md:text-3xl font-medium mt-1 h-4">1 Camp Batu Gede</h5>
                            <a href="#"
                               className="h-auto text-center bg-blue-400 text-blue-700 py-2 rounded-lg font-semibold mt-4 hover:bg-blue-300 focus:scale-95 transition-all">Explore</a>
                        </div>
                    </div>

                    <div className="card h-5/6">
                        <div className="p-5 flex flex-col">
                            <div className="rounded-xl overflow-hidden xs:h-full">
                                <img src={img0} alt="" className="h-auto w-auto "/>
                            </div>
                            <h5 className="text-2xl md:text-3xl font-medium mt-1 h-4">1 Camp Batu Gede</h5>
                            <a href="#"
                               className="h-auto text-center bg-blue-400 text-blue-700 py-2 rounded-lg font-semibold mt-4 hover:bg-blue-300 focus:scale-95 transition-all">Explore</a>
                        </div>
                    </div>


                </div>

            </div>
        </>
    )
}
export default Chair