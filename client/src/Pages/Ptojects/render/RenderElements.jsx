import {useGLTF} from "@react-three/drei"
import React from "react"

export function RenderElements(props) {
    const {myPath} = props
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