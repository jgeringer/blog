import React, { useState, useRef, useEffect } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Canvas, extend, useThree, useFrame } from '@react-three/fiber'
import { useSpring, a } from '@react-spring/three'
import { isWindowDefined } from '@utils/dom';
import classNames from 'classnames';

import * as styles from './style.module.css'

extend({ OrbitControls })

const Plane = () => (
  <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]} receiveShadow>
    <planeBufferGeometry attach="geometry" args={[100, 100]} receiveShadow />
    <meshPhysicalMaterial attach="material" color="green" />
  </mesh>
);


const clickEvent = (e) => {
  console.log('click event!', e)
  console.log(e.intersections[0].object.name)
}

const ProtonGun = () => {
  const [model, setModel] = useState()
  useEffect(() => {
    new GLTFLoader().load('/obj/28-new-gunbody4-no-switches.gltf', setModel)
  }, [])
  console.log(model)
  
  return (
    model ? <>
      {/* <ambientLight />
      <spotLight position={[0, 5, 10]} penumbra={1} castShadow /> */}
      <primitive 
        object={model.scene} 
        onClick={clickEvent} 
        castShadow
        receiveShadow
        scale={1}
        position={[0, 0, 0]}
      />
    </> : null
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
      // autoRotate
      // maxPolarAngle={Math.PI / 3}
      // minPolarAngle={Math.PI / 3}
    />
  )
}

const ProtonGunPack = () => {
  const width = isWindowDefined() ? window.innerWidth : '1200';
  const height = isWindowDefined() ? window.innerHeight : '600';
  
  const [hovered, setHovered] = useState(false);
  const [active, setActive] = useState(false);

  const Box = () => {
  
    const props = useSpring({
      scale: [.001, .017, .001],
      // away-from-handle up towards-handle
      rotation: active ? [.6, 0, 0] : [.8, 0, 0],
      // x y
      position: active ? [.009, .037, .01] : [.009, .035, .01],
      color: hovered ? 'red' : 'gold',
    })
  
    return (
      <a.mesh
        onPointerOver={() => setHovered(true)} 
        onPointerOut={() => setHovered(false)}
        onClick={() => playSfx()}
        scale={props.scale}
        position={props.position}
        rotation={props.rotation}
        castShadow
      >
        <ambientLight />
        <spotLight position={[0, 5, 10]} penumbra={1} castShadow />
        <cylinderBufferGeometry  attach="geometry" args={[1, 1, 1]} />
        <a.meshPhysicalMaterial attach="material" color={props.color} />
      </a.mesh>
    )
  }


  const playSfx = () => {
    console.log('play sfx!')
    const mySound = new Audio('/sfx/SwitchOn.mp3')
    mySound.play()
    setActive(!active)
  }

  const shakeClass = classNames({
    [styles.shake]: active,
  });

  return (
  <div>
    <Canvas
      className={shakeClass}
     camera={{ position: [.5,1,.8], near: 0.1, far: 1000, fov: 10, aspect: width / height }} onCreated={({ gl }) => {
      gl.shadowMap.enabled = true
      gl.shadowMap.type = THREE.PCFSoftShadowMap
    }}>
      {/* <spotLight position={[15, 20, 5]} penumbra={1} castShadow /> */}
      <pointLight position={[15, 15, 15]} intensity={1} castShadow color="orange" />
      {/* <ambientLight intensity={.01} /> */}
      {/* <pointLight position={[0, 0, 0]} color="yellow" intensity={1} /> */}
      <Controls />
      <Box />
      <ProtonGun />
      {/* <Plane /> */}
    </Canvas>
  </div>
)
}

export default ProtonGunPack
