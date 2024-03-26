// @ts-nocheck
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: borobon (https://sketchfab.com/borobon)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/7017ab8380264623a3765cfda1e60df8
Title: モップ
*/
'use client'

import { Loader, useGLTF } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import React, { Suspense, useEffect, useRef, useState } from 'react'
import * as THREE from 'three'

export function Moppu(props) {
  const { nodes, materials } = useGLTF('models/scene.gltf')
  const myMesh = useRef()
  const [modelSize, setModelSize] = useState([0, 0, 0])

  // Calculate model size and update state
  useEffect(() => {
    const boundingBox = new THREE.Box3().setFromObject(myMesh.current)
    const size = new THREE.Vector3()
    boundingBox.getSize(size)
    setModelSize([size.x, size.y, size.z])
  }, [])

  useFrame(({ clock }) => {
    const rotationFactor = 0.5
    myMesh.current.rotation.y =
      Math.PI / 1 + Math.tan(clock.getElapsedTime() * rotationFactor)
  })

  return (
    <group {...props} dispose={null}>
      <mesh
        ref={myMesh}
        castShadow
        receiveShadow
        geometry={nodes.Object_4.geometry}
        material={materials.Material}
        scale={[0.7, 0.7, 0.7]}
        position={[
          -modelSize[0] / 2 + 1.5, // move model left and right
          -modelSize[1] / 2,
          -modelSize[2] / 2,
        ]}
      />
    </group>
  )
}

useGLTF.preload('models/scene.gltf')

export default function Model() {
  return (
    <>
      <Canvas>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            intensity={1}
            castShadow
          />
          <Moppu />
        </Suspense>
      </Canvas>
      <Loader />
    </>
  )
}
