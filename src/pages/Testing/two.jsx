import React, { useState, useRef } from 'react'
import styles from './style.module.css'
import { Canvas, useFrame } from '@react-three/fiber'
import { useSpring, a } from '@react-spring/three'
import * as THREE from 'three'

const Box = () => {
  const meshRef = useRef();
  const meshRef2 = useRef();
  const meshRef3 = useRef();
  const meshRef4 = useRef();

  const props = useSpring({
    color: 'gray',
  })

  useFrame((state) => {
    const mouseX = state.mouse.x / 3;
    const mouseY = state.mouse.y / 3;

    meshRef.current.rotation.x = -(mouseY)
    meshRef.current.rotation.y = (mouseX)
    
    meshRef2.current.rotation.x = -(mouseY)
    meshRef2.current.rotation.y = (mouseX)

    meshRef3.current.rotation.x = -(mouseY)
    meshRef3.current.rotation.y = (mouseX)
    
    meshRef4.current.rotation.x = -(mouseY)
    meshRef4.current.rotation.y = (mouseX)
  })

  return (
    <>
      
      <a.mesh
        ref={meshRef} 
        castShadow
        position={[1, -1, 1.5]}
        receiveShadow
      >
        <ambientLight />
        <spotLight position={[0, 5, 10]} penumbra={1} castShadow />
        <boxGeometry attach="geometry" args={[2.5, 4, .2]} />
        <a.meshPhysicalMaterial attach="material" color='orange' />
      </a.mesh>




      <a.mesh
        ref={meshRef2} 
        castShadow
        position={[0, -1.25, 1]}
        receiveShadow
      >
        <ambientLight />
        <spotLight position={[0, 5, 10]} penumbra={1} castShadow />
        <boxGeometry attach="geometry" args={[2.5, 4, .2]} />
        <a.meshPhysicalMaterial attach="material" color='black' />
      </a.mesh>






      <a.mesh
        ref={meshRef3} 
        castShadow
        position={[-1, -1.5, .5]}
        receiveShadow
      >
        <ambientLight />
        <spotLight position={[0, 5, 10]} penumbra={1} castShadow />
        <boxGeometry attach="geometry" args={[2.5, 4, .2]} />
        <a.meshPhysicalMaterial attach="material" color='red' />
      </a.mesh>

      <a.mesh
        ref={meshRef4} 
        castShadow
        position={[-2, -1.75, 0]}
        receiveShadow
      >
        <ambientLight />
        <spotLight position={[0, 5, 10]} penumbra={1} castShadow />
        <boxGeometry attach="geometry" args={[2.5, 4, .2]} />
        <a.meshPhysicalMaterial attach="material" color='yellow' />
      </a.mesh>
      
    </>
  )
}


const Testing = () => {

  return (
    <div className={styles.background}>
      <Canvas orthographic camera={{ zoom: 150, position: [0, 0, 100] }} onCreated={({ gl }) => {
        gl.shadowMap.enabled = true
        gl.shadowMap.type = THREE.PCFSoftShadowMap
      }}>
        <Box />
      </Canvas>
    </div>
  )
}

export default Testing
