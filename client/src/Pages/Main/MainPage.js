import './MainPage.css'
import {Canvas} from "@react-three/fiber"
import ProjectOne from "./ProjectOne/ProjectOne.js"
import Lang from "../Lang/Lang";
import {Menu} from "../Menu/Menu";
import Contacts from "../Contacts/Contacts";

const MainPage = ({currentLang, setCurrentLang, menuOpened, setMenuOpened}) => {

    return (
        <>
            <Lang currentLang={currentLang} setCurrentLang={setCurrentLang}/>
            <Menu menuOpened={menuOpened} setMenuOpened={setMenuOpened} currentLang={currentLang}/>
            <Canvas camera={{fov: 54, position: [2, 1, 5]}}>
                <ProjectOne currentLang={currentLang}/>
            </Canvas>
            <Contacts/>
        </>
    )
}

export default MainPage