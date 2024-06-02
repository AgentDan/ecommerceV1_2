import React from 'react'
import {useConfiguratorRender} from "../../../context/ConfiguratorRender.jsx"
import {RenderElements} from "./RenderElements.jsx"
import RenderBlockNew from "./RenderBlockNew.jsx";

export const Render = () => {
    const {idProject} = useConfiguratorRender()

    const renderElements = idProject === false
        ? <RenderElements myPath={"zaglushka"}/>
        : <RenderBlockNew/>

    return (
        <>
            {renderElements}
        </>
    )
}
