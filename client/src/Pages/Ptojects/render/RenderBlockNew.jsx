import React, {Suspense} from 'react'
import {RenderElements} from "./RenderElements.jsx"
import {useConfiguratorRender} from "../../../context/ConfiguratorRender.jsx"
import Box from "./Box.jsx"

const RenderBlockNew = () => {
    const {arr, idProject, allElem} = useConfiguratorRender()

    let defoultProject
    arr.projects.map((t) => t.id === idProject ? defoultProject = t.def : "")
    return (
        <>
            <Suspense fallback={<Box/>}>
                {/*<RenderElements myPath={defoultProject}/>*/}

                {
                    defoultProject.map((j)=>{
                        return(
                            <RenderElements myPath={j.file}/>
                        )
                    })
                }

                {
                    allElem.map((t) => {
                        return (
                            t.check && <RenderElements myPath={t.file}/>
                        )
                    })
                }
            </Suspense>
        </>
    );
};

export default RenderBlockNew;