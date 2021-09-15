import React, { useEffect, useRef, useState } from 'react'
import styles from './style.module.css'
import { Canvas, useFrame } from '@react-three/fiber'
import { useSpring, a } from '@react-spring/three'
import * as THREE from 'three'
import { isWindowDefined } from '@utils/dom';

const Testing = () => {
  const [scrolling, setScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);

const Box = () => {
  const meshRef = useRef();
  const meshRef2 = useRef();
  const meshRef3 = useRef();
  const meshRef4 = useRef();

  const { spring, props } = useSpring({
    color: 'gray',
    // spring: active,
    position1: [1, -1, 1.5]
  })

  // const { y } = useSpring({ 
  //   y: [1, -1, 1.5], from: { y: [4, -1, 1.5] },
  //   active: false,
  // })

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

    // console.log(scrollTop)
    
  })

  return (
    <>
      <a.mesh
        ref={meshRef} 
        castShadow
        position={[1, -1, 1.5]}
        // position={props.position1}
        // position={y}
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


  useEffect(() => {
    function onScroll() {
      let currentPosition = window.pageYOffset; // or use document.documentElement.scrollTop;
      if (currentPosition > scrollTop) {
        // downscroll code
        setScrolling(false);
      } else {
        // upscroll code
        setScrolling(true);
      }
      setScrollTop(currentPosition <= 0 ? 0 : currentPosition);
    }

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);

  const zoomAmount = isWindowDefined ? window.innerWidth > 920 ? 150 : 60 : 60;

  return (
    <div className={styles.background}>
      <Canvas orthographic camera={{ zoom: zoomAmount, position: [0, 0, 100] }} onCreated={({ gl }) => {
        gl.shadowMap.enabled = true
        gl.shadowMap.type = THREE.PCFSoftShadowMap
      }}>
        <Box />
      </Canvas>
    </div>
  )
}

export default Testing
