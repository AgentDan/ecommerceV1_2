import ReactCardFlip from "react-card-flip"
import {useState} from "react"

const Chair = () => {
    const [components, setComponents] = useState([
        {id: 0, name: "SHAIR1 ", foto: "./fotos/chairFoto1.jpg", render: "./fotos/chairRender1.png", check: true},
        {id: 1, name: "SHAIR2 ", foto: "", render: "./fotos/chairRender4.png", check: true},
        {id: 2, name: "SHAIR3 ", foto: "./fotos/chairFoto2.jpg", render: "./fotos/chairRender2.png", check: true},
        {id: 3, name: "SHAIR4 ", foto: "", render: "./fotos/chairRender5.png", check: true},
        {id: 4, name: "SHAIR5 ", foto: "", render: "./fotos/chairRender6.png", check: true},
        {id: 5, name: "SHAIR6 ", foto: "./fotos/chairFoto3.jpg", render: "./fotos/chairRender3.png", check: true},
        {id: 6, name: "SHAIR7 ", foto: "", render: "./fotos/chairRender7.png", check: true},
        {id: 7, name: "SHAIR8 ", foto: "", render: "./fotos/chairRender8.png", check: true},
    ])

    const clickFlipped = (id, check) => {
        setComponents(components.map(t => t.id === id ? {...t, check} : t))
    }

    const comp =
        components.map((i, index) => {

            const onClickButton = () => {
                clickFlipped(i.id, !i.check)
            }
            return (
                <div>
                    {i.foto ?
                        <ReactCardFlip isFlipped={i.check} flipDirection={"horizontal"} key={i.id}>
                            <div className="card h-5/6">
                                <div className="p-5 flex flex-col">
                                    <div className="rounded-xl overflow-hidden xs:h-full">
                                        <img src={i.foto} alt="" className="h-auto w-auto "/>
                                    </div>
                                    {/*<h5 className="text-2xl md:text-3xl font-medium mt-1 h-4">{i.name}</h5>*/}
                                    <div
                                        onClick={onClickButton}
                                        className="bg-gradient-to-r from-purple-500 to-pink-500 cursor-pointer h-auto text-center text-white py-2 rounded-lg text-3xl font-semibold mt-4 hover:bg-blue-300 focus:scale-95 transition-all"
                                    >
                                        {i.name}
                                    </div>
                                </div>
                            </div>

                            <div className="card h-5/6">
                                <div className="p-5 flex flex-col">
                                    <div className="rounded-xl overflow-hidden xs:h-full">
                                        <img src={i.render} alt="" className="h-auto w-auto "/>
                                    </div>
                                    {/*<h5 className="text-2xl md:text-3xl font-medium mt-1 h-4">{i.name}</h5>*/}
                                    <a
                                        onClick={onClickButton}
                                        className="bg-gradient-to-r from-purple-500 to-pink-500 cursor-pointer h-auto text-center text-white py-2 rounded-lg text-3xl font-semibold mt-4 hover:bg-blue-300 focus:scale-95 transition-all"
                                    >
                                        {i.name}
                                    </a>
                                </div>
                            </div>
                        </ReactCardFlip>
                        :
                        <div className="card h-5/6">
                            <div className="p-5 flex flex-col">
                                <div className="rounded-xl overflow-hidden xs:h-full">
                                    <img src={i.render} alt="" className="h-auto w-auto "/>
                                </div>
                                {/*<h5 className="text-2xl md:text-3xl font-medium mt-1 h-4">{i.name}</h5>*/}
                                <a
                                    onClick={onClickButton}
                                    className="h-auto text-center bg-gray-100 py-2 rounded-lg font-semibold mt-4 transition-all text-3xl "
                                >
                                    {i.name}
                                </a>
                            </div>
                        </div>
                    }
                </div>
            )
        })

    return (
        <>
            <div className="flex items-center justify-center container mx-auto">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">

                    {comp}

                </div>
            </div>
        </>
    )
}
export default Chair