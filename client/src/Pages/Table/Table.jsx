import React from 'react';

const Table = (props) => {
    const aaa = props.setMenuOpened;

    return (
        <>
            <div className="bg-gray-500 h-screen">
                <h1>Table1</h1>
            </div>
            <div className="bg-gray-300 h-screen">
                <h1>Table2</h1>
            </div>
            <div className="bg-gray-500 h-screen">
                <h1>Table3</h1>
            </div>
            <div className="bg-gray-300 h-screen">
                <h1>Table4</h1>
            </div>
        </>
    )
}

export default Table