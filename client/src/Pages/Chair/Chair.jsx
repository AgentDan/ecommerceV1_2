import ReactCardFlip from "react-card-flip"
import {useState} from "react"

const Chair = ({currentLang}) => {
    const [components, setComponents] = useState([
        {
            id: 0,
            price: "200",
            descriptionEN: "",
            descriptionRS: "",
            descriptionRU: "Металл 1.8мм., полимерно-порошковая краска. Габаритные размеры 1000x300x320.",
            nameEN: "SHAIR",
            nameRS: "ПОЛИЦА",
            nameRU: "ПОЛКА",
            foto: "./fotos/chairFoto1.jpg",
            render: "./fotos/chairRender1.png",
            check: true
        },
        {
            id: 1,
            price: "100",
            nameEN: "CONCRETE COUNTERTOP",
            nameRS: "БЕТОНСКА ПЛОЧА",
            nameRU: "СТОЛЕШНИЦА ИЗ БЕТОНА",
            foto: "",
            render: "./fotos/chairRender4.png",
            check: true
        },
        {
            id: 2,
            price: "100",
            nameEN: "COFFEE TABLE",
            nameRS: "СТО ЗА КАФУ",
            nameRU: "ЖУРНАЛЬНЫЙ СТОЛ",
            foto: "./fotos/chairFoto2.jpg",
            render: "./fotos/chairRender2.png",
            check: true
        },
        {
            id: 3,
            price: "100",
            nameEN: "LAMP",
            nameRS: "ЛАМП",
            nameRU: "СВЕТИЛЬНИК",
            foto: "",
            render: "./fotos/chairRender5.png",
            check: true
        },
        {
            id: 4,
            price: "100",
            nameEN: "CLOSET",
            nameRS: "ПЛАКАР",
            nameRU: "ШКАФ",
            foto: "",
            render: "./fotos/chairRender6.png",
            check: true
        },
        {
            id: 5,
            price: "100",
            nameEN: "RACK",
            nameRS: "РЕГАЛ",
            nameRU: "СТЕЛЛАЖ",
            foto: "./fotos/chairFoto3.jpg",
            render: "./fotos/chairRender3.png",
            check: true
        },
        {
            id: 6,
            price: "100",
            nameEN: "DESIGNER LAMP",
            nameRS: "ДИЗАJНЕРСКА ЛАМПА",
            nameRU: "СВЕТИЛЬНИК ДИЗАЙНЕРСКИЙ",
            foto: "",
            render: "./fotos/chairRender7.png",
            check: true
        },
        {
            id: 7,
            price: "100",
            nameEN: "DECORATIVE PANELS",
            nameRS: "ДЕКОРАТИВНИ ПАНЕЛИ",
            nameRU: "ДЕКОРАТИВНЫЕ ПАНЕЛИ",
            foto: "",
            render: "./fotos/chairRender8.png",
            check: true
        },
    ])

    const clickFlipped = (id, check) => {
        setComponents(components.map(t => t.id === id ? {...t, check} : t))
    }
    const [open, setOpen] = useState(false)
    const [fullScreenImgPath, setFullScreenImgPath] = useState("")

    const comp =
        components.map((i, index) => {

            const onClickButton = () => {
                clickFlipped(i.id, !i.check)
            }
            const onClickFullScreenImg = (pathFullScreenImg) => {
                setOpen(true)
                setFullScreenImgPath(pathFullScreenImg)
            }

            return (
                <div key={i.id}>
                    {i.foto ?
                        <ReactCardFlip isFlipped={i.check} flipDirection={"horizontal"}>
                            <div className="card h-5/6 bg-white">
                                <div className="p-5 flex flex-col ">

                                    <div className="rounded-xl overflow-hidden xs:h-full">
                                        <img src={i.foto} alt=""
                                             className="h-auto w-auto "
                                             onClick={() => onClickFullScreenImg(i.foto)}
                                        />
                                    </div>

                                    <div className="h-12 text-center text-3xl font-bold">{i.price} {'\u20AC'}</div>
                                    <div className="h-12 text-xs">{i.descriptionRU}</div>
                                    <a
                                        onClick={onClickButton}
                                        className="bg-gradient-to-r from-purple-500 to-pink-500 cursor-pointer h-auto text-center text-white py-2 rounded-lg text-xl font-semibold mt-4 hover:bg-blue-300 focus:scale-95 transition-all"
                                    >
                                        {currentLang === "en" ? i.nameEN : ""}
                                        {currentLang === "rs" ? i.nameRS : ""}
                                        {currentLang === "ru" ? i.nameRU : ""}
                                    </a>
                                </div>
                            </div>

                            <div className="card h-5/6 bg-white">
                                <div className="p-5 flex flex-col">
                                    <div className="rounded-xl overflow-hidden xs:h-full">
                                        <img src={i.render}
                                             alt=""
                                             className="h-auto w-auto "
                                             onClick={() => onClickFullScreenImg(i.render)}
                                        />
                                    </div>
                                    <div className="h-12 text-center text-3xl font-bold">{i.price} {'\u20AC'}</div>
                                    <div className="h-12 text-xs">{i.descriptionRU}</div>
                                    <a
                                        onClick={onClickButton}
                                        className="bg-gradient-to-r from-purple-500 to-pink-500 cursor-pointer h-auto text-center text-white py-2 rounded-lg text-xl font-semibold mt-4 hover:bg-blue-300 focus:scale-95 transition-all"
                                    >
                                        {currentLang === "en" ? i.nameEN : ""}
                                        {currentLang === "rs" ? i.nameRS : ""}
                                        {currentLang === "ru" ? i.nameRU : ""}
                                    </a>
                                </div>
                            </div>
                        </ReactCardFlip>
                        :
                        <div className="card h-5/6 bg-white">
                            <div className="p-5 flex flex-col">
                                <div className="rounded-xl overflow-hidden xs:h-full">
                                    <img src={i.render}
                                         alt=""
                                         className="h-auto w-auto "
                                         onClick={() => onClickFullScreenImg(i.render)}
                                    />
                                </div>
                                <div className="h-12 text-center text-3xl font-bold">{i.price} {'\u20AC'}</div>
                                <div className="h-12 text-xs">{i.descriptionRU}</div>
                                <a
                                    onClick={onClickButton}
                                    className="h-auto text-center bg-gray-100 py-2 rounded-lg font-semibold mt-4 transition-all text-xl "
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

    const fullScreen = (screen, number) => {
        // const fullScreenRender = "111"
        console.log(screen)
        console.log(number)
        return (
            <div>1111</div>
        )
        return (
            <div
                onClick={() => setOpen(false)}
                className={`fixed inset-0 flex justify-center items-center transition-colors ${open ? "visible bg-black/20" : "invisible"} `}
            >
                <img src={screen} alt="" className="h-full w-auto"/>
            </div>
        )
    }

    return (
        <>
            <div className="flex items-center justify-center mx-auto h-auto w-screen bg-blue-50">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-28 m-16">
                    {comp}
                    <div
                        onClick={() => setOpen(false)}
                        className={`fixed inset-0 flex justify-center items-center transition-colors ${open ? "visible bg-black/50" : "invisible"} `}
                    >
                        <img src={fullScreenImgPath} alt="" className="h-full w-auto"/>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Chair