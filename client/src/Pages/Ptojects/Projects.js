import {Statetwo} from "./../../state/statetwo"
import {useState} from "react"
import {useParams} from "react-router-dom"
import PanelElementsVariantsTailwindMax from "./panel/PanelElementsVariantsTailwindMAX"
import {Canvas} from "@react-three/fiber"
import {Experience} from "./Experience"

const Projects = () => {
    const {path} = useParams()
    const [myElements, setMyElements] = useState(Statetwo[path].components)
    return (
        <>
            <Canvas shadows camera={{ position: [4, 4, -12], fov: 35 }}>
                <Experience myElements={myElements}/>
            </Canvas>
            <PanelElementsVariantsTailwindMax myElements={myElements} setMyElements={setMyElements}/>
        </>
    )
}

export default Projects