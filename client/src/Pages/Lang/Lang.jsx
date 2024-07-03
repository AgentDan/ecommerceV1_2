import React from 'react';

const Lang = ({currentLang, setCurrentLang}) => {

    return (
        <div className="justify-stretch z-20 fixed top-1 right-12 p-2 w-36 h-11 "
        >
            <a className={`text-2xl rounded-xl cursor-pointer ${currentLang === "en" ? "bg-gray-400 text-blue-600" : ""} p-1`}
               onClick={() => setCurrentLang("en")}
            >
                EN
            </a>
            <a className={`text-2xl rounded-xl cursor-pointer ${currentLang === "rs" ? "bg-gray-400 text-blue-600" : ""} p-1`}
               onClick={() => setCurrentLang("rs")}
            >
                RS
            </a>
            <a className={`text-2xl rounded-xl cursor-pointer ${currentLang === "ru" ? "bg-gray-400 text-blue-600" : ""} p-1`}
               onClick={() => setCurrentLang("ru")}
            >
                RU
            </a>
        </div>
    );
};

export default Lang;