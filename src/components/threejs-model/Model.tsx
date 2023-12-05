'use client'

import { Canvas, useFrame, useThree } from '@react-three/fiber'
import React from 'react'
import * as THREE from 'three'
import { easing } from 'maath'

const SkyBox = () => {
  const { scene } = useThree()
  const loader = new THREE.CubeTextureLoader()

  //cache
  THREE.Cache.enabled = true

  const texture = loader.load([
    '/images/cube/px.webp',
    '/images/cube/nx.webp',
    '/images/cube/py.webp',
    '/images/cube/ny.webp',
    '/images/cube/pz.webp',
    '/images/cube/nz.webp',
  ])

  scene.background = texture
  return null
}

const Rig = () => {
  useFrame((state, delta) => {
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
