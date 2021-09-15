import React, { useState, useRef } from 'react'
import styles from './style.module.css'
import { Canvas, useFrame } from '@react-three/fiber'
import { useSpring, a } from '@react-spring/three'
import * as THREE from 'three'
import { isWindowDefined } from '@utils/dom';

const Box = () => {
  const meshRef = useRef();
  const props = useSpring({
    color: 'gray',
  })

  // useFrame((state) => {
  //   // meshRef.current.rotation.y += 0.01
  //   meshRef.current.rotation.y = state.mouse.x
  //   meshRef.current.rotation.x = state.mouse.y
  // })

  return (
    <>
      <a.mesh
        ref={meshRef} 
        castShadow
        position={[0, 0, 0]}
      >
        <ambientLight />
        <spotLight position={[0, 5, 10]} penumbra={1} castShadow />
        <boxGeometry attach="geometry" args={[2, 4, .2]} />
        <a.meshPhysicalMaterial attach="material" color={props.color} />
      </a.mesh>
    </>
  )
}

const Box2 = () => {
  const meshRef2 = useRef();
  const props = useSpring({
    color: 'gray',
  })

  // useFrame((state) => {
  //   // meshRef.current.rotation.y += 0.01
  //   meshRef.current.rotation.y = state.mouse.x
  //   meshRef.current.rotation.x = state.mouse.y
  // })

  return (
    <>
      <a.mesh
        ref={meshRef2} 
        castShadow
        position={[1, 0, .2]}
      >
        <ambientLight />
        <spotLight position={[0, 5, 10]} penumbra={1} castShadow />
        <boxGeometry attach="geometry" args={[2, 4, .2]} />
        <a.meshPhysicalMaterial attach="material" color='green' />
      </a.mesh>
    </>
  )
}

// const mouseMove = (evt) => {
//   useFrame(( state ) => {
//     console.log(state)
//   })
//   // console.log('mouse move!', evt)
//   // camera.rotation.x = 5;
// }

// const Plane = () => {
//   return (
//     <mesh position={[0, -0.5, 0]} receiveShadow onPointerMove={(e) => mouseMove(e)}>
//         <planeBufferGeometry attach="geometry" args={[100, 100]} />
//         <meshPhysicalMaterial attach="material" color="white" />
//       </mesh>
//     )
//   };



const Testing = () => {
  const [currX, setCurrX] = useState(0);
  const [currY, setCurrY] = useState(0);

  function Dolly() {
    // This one makes the camera move in and out
    useFrame(({ clock, camera }, state) => {
      // camera.position.z = 0 + Math.sin(clock.getElapsedTime()) * 30
      // camera.rotation.x = .5;   
      camera.rotation.y = - currX / 5000;
      camera.rotation.x = - currY / 5000;
      // camera.rotation.y = .5
    })
    return null
  }

  if (isWindowDefined()) {
    document.addEventListener('mousemove', (event) => {
      // console.log(`Mouse X: ${event.clientX}`);
      setCurrX(event.clientX)
      setCurrY(event.clientY)
    });
  }

  return (
    <div className={styles.background}>
      <Canvas onCreated={({ gl }) => {
        gl.shadowMap.enabled = true
        gl.shadowMap.type = THREE.PCFSoftShadowMap
      }}>
        <Box />
        <Box2 />
        <Dolly />
        {/* <Plane /> */}
      </Canvas>
    </div>
  )
}

export default Testing
