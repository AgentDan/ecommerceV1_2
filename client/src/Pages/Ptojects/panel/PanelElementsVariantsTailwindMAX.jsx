import React from 'react'
import {v1} from "uuid"

const PanelElementsVariantsTailwindMax = ({myElements, setMyElements}) => {
    const myOnClick = (id) => {
        setMyElements(myElements.map(t => t.id === id ? {...t, check: true} : {...t, check: false}))
    }

    return (
        <div className="fixed right-0.5 top-1 flex flex-col items-center flex-wrap w-48">
            <div className='cursor-pointer font-bold top-1 right-1 flex flex-col items-start backdrop-blur-sm bg-white/30 w-44 h-20 rounded-3xl pl-3 pt-2'>
            {
                myElements.map((i) => {
                        return (
                            <div
                                className="w-48 text-sm font-medium text-gray-900 h-5 cursor-pointer"
                                key={v1()}
                            >
                                <span
                                    className={i.check === true ? "bg-gray-400 text-white" : ""}
                                    onClick={e => myOnClick(i.id)}
                                >
                                    {i.name}
                                </span>
                            </div>
                        )
                    }
                )
            }
        </div>
     </div>
    )
}

export default PanelElementsVariantsTailwindMax;