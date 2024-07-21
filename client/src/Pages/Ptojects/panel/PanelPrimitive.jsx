import React from 'react'

const PanelPrimitive = ({nodes, materials, myPath}) => {
    return (
        <>
            <mesh
                geometry={nodes[myPath].geometry}
                material={materials[myPath]}
            />
        </>
    );
};

export default PanelPrimitive;