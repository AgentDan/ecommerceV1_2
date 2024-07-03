import './MainPage.css'
import {Canvas} from "@react-three/fiber"
import ProjectOne from "./ProjectOne/ProjectOne.js"
import Lang from "../Lang/Lang";

const MainPage = ({currentLang, setCurrentLang}) => {

    return (
        <>
            <Lang currentLang={currentLang} setCurrentLang={setCurrentLang}/>
            <Canvas camera={{fov: 54, position: [2, 1, 5]}}>
                <ProjectOne currentLang={currentLang}/>
            </Canvas>
        </>
    )
}

export default MainPage