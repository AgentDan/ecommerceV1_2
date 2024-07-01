import {Link} from "react-router-dom"

export const Menu = (props) => {
    const {menuOpened, setMenuOpened} = props

    return (
        <>
            <button
                onClick={() => setMenuOpened(!menuOpened)}
                className=" z-20 fixed top-12 right-12 p-3 backdrop-blur-sm bg-white/30 w-11 h-11 rounded-md"
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
                <div className="flex items-center justify-start flex-col gap-6 p-8 font-bold text-blue-600">

                    <div className={'h-6 w-auto cursor-pointer mt-28'}>
                        <Link to={"/"}
                              onClick={() => setMenuOpened(false)}
                        >
                            HOME
                        </Link>
                    </div>

                    {/*<div className={'h-6 w-auto cursor-pointer '}>*/}
                    {/*    <Link to={"/table"}*/}
                    {/*          onClick={() => setMenuOpened(false)}*/}
                    {/*    >*/}
                    {/*        Table*/}
                    {/*    </Link>*/}
                    {/*</div>*/}

                    <div className={'h-6 w-auto cursor-pointer '}>
                        <Link to={"/chair"}
                              onClick={() => setMenuOpened(false)}
                        >
                            Chair
                        </Link>
                    </div>

                    {/*<div className={'h-6 w-auto cursor-pointer '}>*/}
                    {/*    <Link to={"/rack"}*/}
                    {/*          onClick={() => setMenuOpened(false)}*/}
                    {/*    >*/}
                    {/*        Rack*/}
                    {/*    </Link>*/}
                    {/*</div>*/}

                    {/*<div className={'h-6 w-auto cursor-pointer '}>*/}
                    {/*    <Link to={"/lamp"}*/}
                    {/*          onClick={() => setMenuOpened(false)}*/}
                    {/*    >*/}
                    {/*        Lamp*/}
                    {/*    </Link>*/}
                    {/*</div>*/}

                    <div className={'h-6 w-auto cursor-pointer'}>
                        <a href="http://web3ddd.com"
                           target="_blank"
                           onClick={() => setMenuOpened(false)}
                        >
                            3ddd
                        </a>
                    </div>

                </div>
            </div>
        </>
    )
}
