import './MainPage.css'
import {Canvas} from "@react-three/fiber"
import ProjectOne from "./ProjectOne/ProjectOne.js"
import {Menu} from "../Menu/Menu"
import {useState} from "react"

const MainPage = ({isLogin}) => {
    const [menuOpened, setMenuOpened] = useState(false)

    return (
        <>
            <Canvas camera={{fov: 54, position: [5, 0, 1]}}>
                <ProjectOne/>
            </Canvas>
            <Menu menuOpened={menuOpened} setMenuOpened={setMenuOpened} isLogin={isLogin}/>
        </>
    )
}

export default MainPage