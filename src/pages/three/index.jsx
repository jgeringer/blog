import React, { useState, useRef, useEffect, Suspense } from 'react'
import * as THREE from 'three'

import styles from './style.module.css'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { Canvas, extend, useThree, useFrame, useLoader } from '@react-three/fiber'
import { useSpring, a } from '@react-spring/three'
import img from './card-vert.png'
import imgBack from './back.png'
import { RoundedBox } from "@react-three/drei";


extend({ OrbitControls })

const Controls = () => {
  const orbitRef = useRef();
  const { camera, gl } = useThree();

  useFrame((state) => {
    // console.log(`state: `, state);
    console.log(`state x: `, state.mouse.x);
    console.log(`state y: `, state.mouse.y);
    // camera.position.x = - state.mouse.x;
    camera.position.x = - state.mouse.y;
    camera.position.z = - state.mouse.x;
  
    orbitRef.current.update()
  })

  return (
    <orbitControls
      args={[camera, gl.domElement]}
      ref={orbitRef}
      // autoRotate
      maxPolarAngle={Math.PI / 3}
      minPolarAngle={Math.PI / 3}
    />
  )
}

const mouseMove = (evt) => {
  console.log('mouse move!', evt)
  // camera.rotation.x = 5;
}

const Plane = () => (
  <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]} receiveShadow onPointerMove={(e) => mouseMove(e)}>
    <planeBufferGeometry attach="geometry" args={[100, 100]} />
    <meshPhysicalMaterial attach="material" color="white" />
  </mesh>
);

const Box = () => {
  const [hovered, setHovered] = useState(false);
  const [active, setActive] = useState(false);
  const props = useSpring({
    scale: active ? [1.5, 1.5, 1.5] : [1, 1, 1],
    color: hovered ? 'hotpink' : 'gray',
  })

  const texture = useLoader(THREE.TextureLoader, img)
  const textureBack = useLoader(THREE.TextureLoader, imgBack)

  return (
    <a.mesh
      onPointerOver={() => setHovered(true)} 
      onPointerOut={() => setHovered(false)}
      onClick={() => setActive(!active)}
      scale={props.scale}
      castShadow
    >
      <ambientLight />
      <spotLight position={[0, 5, 10]} penumbra={1} castShadow />
      
      {/* <RoundedBox args={[3, 3, 0.25]} radius={0.1}>
        <meshLambertMaterial attach="material" color={"grey"} />
      </RoundedBox> */}

      {/* <boxGeometry attach="geometry" args={[1, 1, 1]} radius={0.05} smoothness={4} />
      <a.meshPhysicalMaterial attach="material" map={texture} color={props.color} /> */}
      
      <RoundedBox args={[1, 2, .15]} radius={0.05} smoothness={2}>
        <a.meshPhysicalMaterial attachArray="material" map={texture} color={props.color}  />
        <a.meshPhysicalMaterial attachArray="material" map={textureBack} color={props.color} />
        <a.meshPhysicalMaterial attachArray="material" map={textureBack} color={props.color} />
        <a.meshPhysicalMaterial attachArray="material" map={textureBack} color={props.color} />
        <a.meshPhysicalMaterial attachArray="material" map={textureBack} color={props.color} />
        <a.meshPhysicalMaterial attachArray="material" map={textureBack} color={props.color} />
      </RoundedBox>

    </a.mesh>
  )
}

export default () => (
  <div className={styles.background}>
    <Canvas 
      camera={{ position: [0,0,5] }} 
      onCreated={({ gl, camera }) => {
        gl.shadowMap.enabled = true
        gl.shadowMap.type = THREE.PCFSoftShadowMap
        camera.lookAt(0, 0, 0)
      }}
    >
      <fog attach="fog" args={["#eee", 5, 15]} />
      <Controls />
      <Suspense fallback={null}>
        <Box />
      </Suspense>
      <Plane />
    </Canvas>
  </div>
)
