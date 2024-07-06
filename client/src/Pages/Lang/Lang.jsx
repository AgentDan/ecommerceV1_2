import React from 'react';

const Lang = ({currentLang, setCurrentLang}) => {

    return (
        <div className="justify-stretch z-20 fixed top-3 right-36 p-2 w-36 h-10 "
        >
            <a className={`text-xl rounded cursor-pointer p-1 ${currentLang === "en" ? "bg-gray-300 text-red-600" : ""}`}
               onClick={() => setCurrentLang("en")}
            >
                EN
            </a>

            <a className={`text-xl rounded cursor-pointer ${currentLang === "rs" ? "bg-gray-300 text-red-600" : ""} p-1`}
               onClick={() => setCurrentLang("rs")}
            >
                RS
            </a>
            <a className={`text-xl rounded cursor-pointer ${currentLang === "ru" ? "bg-gray-300 text-red-600" : ""} p-1`}
               onClick={() => setCurrentLang("ru")}
            >
                RU
            </a>
        </div>
    );
};

export default Lang;