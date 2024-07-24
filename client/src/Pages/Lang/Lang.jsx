import React from 'react';

const Lang = ({currentLang, setCurrentLang}) => {

    return (
        <div className="justify-stretch z-20 fixed flex top-1 right-72 p-2 w-24 h-10"
        >

            <div className="fixed ml-0 h-auto w-auto hover:scale-150 text-bold">
                <a className={`text-white text-4xl rounded cursor-pointer p-1 ${currentLang === "en" ? "text-red-700" : ""}`}
                   onClick={() => setCurrentLang("en")}
                >
                    EN
                </a>
            </div>

            <div className="fixed ml-14 h-auto w-auto hover:scale-150 text-bold">
                <a className={`text-white text-4xl rounded cursor-pointer p-1  ${currentLang === "rs" ? "text-red-700" : ""} p-1`}
                   onClick={() => setCurrentLang("rs")}
                >
                    RS
                </a>
            </div>

            <div className="fixed ml-28 h-auto w-auto hover:scale-150 text-bold">
                <a className={`text-white text-4xl rounded cursor-pointer p-1  ${currentLang === "ru" ? "text-red-700" : ""} p-1`}
                   onClick={() => setCurrentLang("ru")}
                >
                    RU
                </a>
            </div>

        </div>
    );
};

export default Lang;