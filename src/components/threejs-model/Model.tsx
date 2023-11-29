'use client'

import { Canvas, useFrame, useThree } from '@react-three/fiber'
import React from 'react'
import * as THREE from 'three'
import { easing } from 'maath'

const SkyBox = () => {
  const { scene } = useThree()
  const loader = new THREE.CubeTextureLoader()
  const texture = loader.load([
    '/images/cube/px.jpg',
    '/images/cube/nx.jpg',
    '/images/cube/py.jpg',
    '/images/cube/ny.jpg',
    '/images/cube/pz.jpg',
    '/images/cube/nz.jpg',
  ])

  scene.background = texture
  return null
}

const Rig = () => {
  useFrame((state, delta) => {
    console.log(Math.sin(state.pointer.x) * 15)
    easing.damp3(
      state.camera.position,
      [
        Math.sin(-state.pointer.x) * 15,
        Math.atan(-state.pointer.y) * 15,
        Math.cos(-state.pointer.x) * 15,
      ],
      0.1,
      delta,
    )
    state.camera.lookAt(0, 0, 0)
  })

  return null
}

const Model = ({ isHover, imageHeight }: any) => {
  const height = imageHeight / 10
  return (
    <Canvas
      gl={{ antialias: false }}
      camera={{ position: [7, 3, 4] }}
      style={{
        width: '100%',
        height: `${height}rem`,
        borderTopLeftRadius: '1.8rem',
        borderTopRightRadius: '1.8rem',
        borderColor: '#fff',
      }}
    >
      {isHover && <Rig />}
      {isHover && <SkyBox />}
    </Canvas>
  )
}
export default Model
