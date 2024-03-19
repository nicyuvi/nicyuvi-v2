// @ts-nocheck
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 scene.gltf --transform 
Files: scene.gltf [38.51KB] > /home/nicyuvi/Projects/Portfolio/nicyuvi-v2/public/scene-transformed.glb [35.22KB] (9%)
Author: Jellypack (https://sketchfab.com/jellypack)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/ps1low-poly-great-white-shark-54b11fd3f157410faa7ab146d7fc5da5
Title: PS1/Low Poly Great White Shark
*/

'use client'

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

export function Shark(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/scene-transformed.glb')

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <primitive object={nodes.GLTF_created_0_rootJoint} />
        <skinnedMesh
          name="Object_7"
          geometry={nodes.Object_7.geometry}
          material={materials['Material.001']}
          skeleton={nodes.Object_7.skeleton}
          position={[0, 0.031, 1.253]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <skinnedMesh
          name="Object_9"
          geometry={nodes.Object_9.geometry}
          material={materials['Material.001']}
          skeleton={nodes.Object_9.skeleton}
          position={[0, 0.031, 1.253]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <skinnedMesh
          name="Object_11"
          geometry={nodes.Object_11.geometry}
          material={materials['Material.001']}
          skeleton={nodes.Object_11.skeleton}
          position={[0, 0.031, 1.253]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <skinnedMesh
          name="Object_13"
          geometry={nodes.Object_13.geometry}
          material={materials['Material.001']}
          skeleton={nodes.Object_13.skeleton}
          position={[0, 0.031, 1.253]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <skinnedMesh
          name="Object_15"
          geometry={nodes.Object_15.geometry}
          material={materials['Material.001']}
          skeleton={nodes.Object_15.skeleton}
          position={[0, 0.031, 1.253]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <skinnedMesh
          name="Object_17"
          geometry={nodes.Object_17.geometry}
          material={materials['Material.001']}
          skeleton={nodes.Object_17.skeleton}
          position={[0, 0.031, 1.253]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <skinnedMesh
          name="Object_19"
          geometry={nodes.Object_19.geometry}
          material={materials['Material.001']}
          skeleton={nodes.Object_19.skeleton}
          position={[0, 0.031, 1.253]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <skinnedMesh
          name="Object_21"
          geometry={nodes.Object_21.geometry}
          material={materials['Material.001']}
          skeleton={nodes.Object_21.skeleton}
          position={[0, 0.031, 1.253]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <skinnedMesh
          name="Object_23"
          geometry={nodes.Object_23.geometry}
          material={materials['Material.001']}
          skeleton={nodes.Object_23.skeleton}
          position={[0, 0.031, 1.253]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/scene-transformed.glb')

export default function Model() {
  return (
    <Canvas>
      <Shark />
    </Canvas>
  )
}
