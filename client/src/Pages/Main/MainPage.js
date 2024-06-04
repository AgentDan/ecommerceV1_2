import './MainPage.css'
import {Canvas} from "@react-three/fiber"
import ProjectOne from "./ProjectOne/ProjectOne.js"

const MainPage = () => {

    return (
        <>
            <Canvas camera={{fov: 54, position: [2, 1, 5]}}>
                <ProjectOne/>
            </Canvas>
        </>
    )
}

export default MainPage