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
    easing.damp3(
      state.camera.position,
      [
        Math.sin(state.pointer.x) * 8,
        Math.atan(state.pointer.y) * 8,
        Math.cos(state.pointer.x) * 8,
      ],
      0.25,
      delta,
    )
    state.camera.lookAt(0, 0, 0)
  })

  return null
}

const Model = ({ isHover }: any) => {
  return (
    <div className="h-[17rem] w-[30rem] xl:h-[24rem] xl:w-[42.3rem]">
      <Canvas
        gl={{ antialias: false }}
        camera={{ position: [7, 3, 4] }}
        style={{
          width: '100%',
          height: '100%',
          borderTopLeftRadius: '1.8rem',
          borderTopRightRadius: '1.8rem',
        }}
      >
        {isHover && <Rig />}
        {isHover && <SkyBox />}
      </Canvas>
    </div>
  )
}
export default Model
