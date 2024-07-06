import {Link} from "react-router-dom"

export const Menu = (props) => {
    const {menuOpened, setMenuOpened} = props

    return (
        <>
            <button
                onClick={() => setMenuOpened(!menuOpened)}
                className=" z-20 fixed top-16 right-12 p-3 backdrop-blur-sm bg-white/30 w-11 h-11 rounded-md"
            >
                <div
                    className={`bg-blue-600 h-0.5 rounded-md w-full transition-all ${
                        menuOpened ? "rotate-45  translate-y-0.5" : ""
                    }`}
                />
                <div
                    className={`bg-blue-600 h-0.5 rounded-md w-full my-1 ${
                        menuOpened ? "hidden" : ""
                    }`}
                />
                <div
                    className={`bg-blue-600 h-0.5 rounded-md w-full transition-all ${
                        menuOpened ? "-rotate-45" : ""
                    }`}
                />
            </button>
            <div
                className={`z-10 fixed top-0 right-0 bottom-0 backdrop-blur-sm transition-all overflow-hidden flex flex-col ${menuOpened ? "w-80" : "w-0"}`}
            >
                <div className="flex items-center justify-start flex-col gap-6 p-8 font-bold text-black">

                    <div className={'h-6 w-auto cursor-pointer mt-28 text-xl'}>
                        <Link to={"/"}
                              onClick={() => setMenuOpened(false)}
                        >
                            HOME
                        </Link>
                    </div>

                    <div className={'h-6 w-auto cursor-pointer text-xl'}>
                        <Link to={"/chair"}
                              onClick={() => setMenuOpened(false)}
                        >
                            CHAIR
                        </Link>
                    </div>

                    <div className={'h-6 w-auto cursor-pointer text-xl'}>
                        <a href="http://web3ddd.com"
                           target="_blank"
                           onClick={() => setMenuOpened(false)}
                        >
                            3-DDD
                        </a>
                    </div>

                </div>
            </div>
        </>
    )
}
