import {Canvas} from "@react-three/fiber"
import {Experience} from "./Experience"
import PanelProjectsTailwind from "./panel/PanelProjectsTailwind"
import './projects.css'

const Projects = () => {
    return (
        <>
            <Canvas shadows camera={{ position: [4, 4, -12], fov: 35 }}>
                <Experience />
            </Canvas>
            <PanelProjectsTailwind/>
        </>
    );
};

export default Projects;