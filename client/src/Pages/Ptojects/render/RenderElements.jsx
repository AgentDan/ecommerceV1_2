import {useGLTF} from "@react-three/drei"
import React from "react"

export function RenderElements(props) {
    const {myPath} = props
    const globalPath = process.env.REACT_APP_PUBLIC_URL
    // const pathNew = globalPath + "./models/" + myPath + ".gltf"
    const pathNew = "http://localhost:3000/models/" + myPath + ".gltf"
    const {nodes, materials} = useGLTF(pathNew)

    return (
        <>
            <mesh
                geometry={nodes[myPath].geometry}
                material={materials[myPath]}
            />
        </>
    )
}