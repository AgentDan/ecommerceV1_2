import ReactCardFlip from "react-card-flip"
import {useState} from "react"

const Lamp = ({currentLang}) => {
    const [components, setComponents] = useState([
        {id: 0, nameEN: "LAMP", nameRS: "LAMP", nameRU: "СВЕТИЛЬНИК", foto: "./fotos/chairRender5.png", render: "./fotos/chairRender5.png", check: true},
        {id: 1, nameEN: "LAMP", nameRS: "LAMP", nameRU: "СВЕТИЛЬНИК", foto: "", render: "./fotos/chairRender4.png", check: true},
        {id: 2, nameEN: "LAMP", nameRS: "LAMP", nameRU: "СВЕТИЛЬНИК", foto: "", render: "./fotos/chairRender3.png", check: true},
        {id: 2, nameEN: "LAMP", nameRS: "LAMP", nameRU: "СВЕТИЛЬНИК", foto: "", render: "./fotos/chairRender2.png", check: true},
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
                <div  key={i.id}>
                    {i.foto ?
                        <ReactCardFlip isFlipped={i.check} flipDirection={"horizontal"}>
                            <div className="card h-5/6">
                                <div className="p-5 flex flex-col">
                                    <div className="rounded-xl overflow-hidden xs:h-full">
                                        <img src={i.foto} alt="" className="h-auto w-auto "/>
                                    </div>
                                    <a
                                        onClick={onClickButton}
                                        className="bg-gradient-to-r from-purple-500 to-pink-500 cursor-pointer h-auto text-center text-white py-2 rounded-lg text-3xl font-semibold mt-4 hover:bg-blue-300 focus:scale-95 transition-all"
                                    >
                                        {currentLang === "en" ? i.nameEN : ""}
                                        {currentLang === "rs" ? i.nameRS : ""}
                                        {currentLang === "ru" ? i.nameRU : ""}
                                    </a>
                                </div>
                            </div>

                            <div className="card h-5/6">
                                <div className="p-5 flex flex-col">
                                    <div className="rounded-xl overflow-hidden xs:h-full">
                                        <img src={i.render} alt="" className="h-auto w-auto "/>
                                    </div>
                                    <a
                                        onClick={onClickButton}
                                        className="bg-gradient-to-r from-purple-500 to-pink-500 cursor-pointer h-auto text-center text-white py-2 rounded-lg text-3xl font-semibold mt-4 hover:bg-blue-300 focus:scale-95 transition-all"
                                    >
                                        {currentLang === "en" ? i.nameEN : ""}
                                        {currentLang === "rs" ? i.nameRS : ""}
                                        {currentLang === "ru" ? i.nameRU : ""}
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
                                <a
                                    onClick={onClickButton}
                                    className="h-auto text-center bg-gray-100 py-2 rounded-lg font-semibold mt-4 transition-all text-3xl "
                                >
                                    {currentLang === "en" ? i.nameEN : ""}
                                    {currentLang === "rs" ? i.nameRS : ""}
                                    {currentLang === "ru" ? i.nameRU : ""}
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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-28 ">

                    {comp}

                </div>
            </div>
        </>
    )
}
export default Lamp