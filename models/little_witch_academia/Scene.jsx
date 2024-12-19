/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 scene.gltf --transform 
Files: scene.gltf [92.29KB] > /home/pieberrykinnie/portfolio/models/little_witch_academia/scene-transformed.glb [1.09MB] (-1084%)
Author: qnaman (https://sketchfab.com/qnaman)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/little-witch-academia-52d2cafc27c1440c987764294a89d2eb
Title: Little Witch Academia
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/scene-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Plane002_Black_0.geometry} material={materials.PaletteMaterial001} position={[1.522, 0.911, 0.039]} rotation={[2.442, -0.947, -1.792]} scale={[0.038, 0.035, 0.028]} />
      <mesh geometry={nodes.Plane009_red_0.geometry} material={materials.material} position={[1.941, -1.444, 0.287]} rotation={[2.918, -0.345, -0.429]} scale={0.032} />
      <mesh geometry={nodes['Circle003_Sk��ra_0'].geometry} material={materials.Skra} position={[1.867, -0.799, 0.594]} rotation={[-1.601, 0.015, 0.491]} scale={0.083} />
      <mesh geometry={nodes.Circle013_yellow_0.geometry} material={materials.PaletteMaterial002} position={[1.639, 0.836, -0.028]} rotation={[-1.585, 0.116, -2.534]} scale={0.493} />
      <mesh geometry={nodes.Circle001_hat_0.geometry} material={materials.material_4} position={[1.639, 0.836, -0.028]} rotation={[-1.585, 0.116, -2.534]} scale={0.493} />
      <mesh geometry={nodes['Plane030_W��osy2_0'].geometry} material={materials.Wosy2} position={[1.475, 0.91, 0.043]} rotation={[-0.015, 0.913, 0.443]} scale={0.493} />
      <mesh geometry={nodes.Plane008_Blue_dress004_0.geometry} material={materials.PaletteMaterial003} position={[1.789, 0.567, 0.278]} rotation={[-Math.PI / 2, 0, 0]} scale={0.011} />
      <mesh geometry={nodes.Cube002_Blue_dress003_0.geometry} material={materials['Blue_dress.003']} position={[2.116, -0.188, 1.659]} rotation={[-Math.PI / 2, 0, 0]} scale={0.493} />
      <mesh geometry={nodes.Plane012_BROWN_0.geometry} material={materials.BROWN} position={[1.879, 0.438, 0.44]} rotation={[-0.99, 0.989, -0.901]} scale={0.015} />
      <mesh geometry={nodes.Plane024_koszulka_0.geometry} material={materials.PaletteMaterial004} position={[1.687, 0.543, 0.291]} rotation={[-Math.PI / 2, 0, 0]} scale={0.493} />
      <mesh geometry={nodes.AKKO_HEAD_OCZKI_0.geometry} material={materials.OCZKI} position={[2.112, -0.227, 0.232]} rotation={[-1.551, -0.251, -0.377]} scale={0.581} />
    </group>
  )
}

useGLTF.preload('/scene-transformed.glb')