import React, { useState, useRef, useEffect } from 'react'
import * as THREE from 'three'
import * as styles from './style.module.css'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Canvas, extend, useThree, useFrame } from '@react-three/fiber'

extend({ OrbitControls })

const SpaceShip = () => {
  const [model, setModel] = useState()
  useEffect(() => {
    new GLTFLoader().load('/spaceship/scene.gltf', setModel)
  }, [])
  console.log(model)
  return (
    model ? <primitive object={model.scene} /> : null
  )
}

const Controls = () => {
  const orbitRef = useRef();
  const { camera, gl } = useThree();

  useFrame(() => {
    orbitRef.current.update()
  })

  return (
    <orbitControls
      args={[camera, gl.domElement]}
      ref={orbitRef}
      autoRotate
      maxPolarAngle={Math.PI / 3}
      minPolarAngle={Math.PI / 3}
    />
  )
}

export default () => (
  <div className={styles.section}>
    <h1 className={styles.h1}>threejs/react-fiber</h1>
    <Canvas camera={{ position: [0,0,5] }} onCreated={({ gl }) => {
      gl.shadowMap.enabled = true
      gl.shadowMap.type = THREE.PCFSoftShadowMap
    }}>
      <ambientLight intensity={0.5} />
      <spotLight position={[15, 20, 5]} penumbra={1} castShadow />
      <Controls />
      <SpaceShip />
    </Canvas>
  </div>
)
