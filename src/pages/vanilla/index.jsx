// import React, { useRef, useEffect } from 'react'
// import * as THREE from "three";
// import { GUI } from 'three/examples/jsm/libs/dat.gui.module'
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
// import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls'

// const Vanilla = () => {

//   const mountRef = useRef(null);

//   useEffect(() => {

//     var scene = new THREE.Scene();
//     var camera = new THREE.PerspectiveCamera( 45, window.innerWidth/window.innerHeight, 0.1, 100 );
//     var renderer = new THREE.WebGLRenderer();
    
    
//     const controls = new OrbitControls( camera, renderer.domElement );
//     // const controls = new TrackballControls( camera, renderer.domElement );
    
//     camera.position.set( 0, 0, 30 );
    
//     controls.update();


//     renderer.shadowMap.enabled = true;
//     renderer.shadowMap.type = THREE.PCFSoftShadowMap; // default THREE.PCFShadowMap
    
//     //Create a DirectionalLight and turn on shadows for the light
//     const light = new THREE.DirectionalLight( 0xffffff, 100, 100 );
//     light.position.set( 20, 100, 0 ); //default; light shining from top
//     light.castShadow = true; // default false
//     scene.add( light );

// //Set up shadow properties for the light
// light.shadow.mapSize.width = 1512; // default
// light.shadow.mapSize.height = 1512; // default
// light.shadow.camera.near = .5; // default
// light.shadow.camera.far = 500; // default


// const pointLight = new THREE.PointLight( 0xff0000, 1, 100 );
// pointLight.position.set( 5, 5, 5 );
// scene.add( pointLight );


// // const gui = new GUI();
// // const lightFolder = gui.addFolder('Light');
// // lightFolder.add(light, 'position', 0, 2, 0.01);


// const amlight = new THREE.AmbientLight( 0xff0000 ); // soft white light
// scene.add( amlight );


//     renderer.setSize( window.innerWidth, window.innerHeight );
//     mountRef.current.appendChild( renderer.domElement );


//     const loader = new THREE.TextureLoader();
//     const materials = [
//         new THREE.MeshBasicMaterial({map: loader.load('card-vert.png'), rotation: 55}),
//         new THREE.MeshBasicMaterial({map: loader.load('card-vert.png'), rotation: 55}),
//         new THREE.MeshBasicMaterial({map: loader.load('card-vert.png'), rotation: 55}),
//         new THREE.MeshBasicMaterial({map: loader.load('card-vert.png'), rotation: 55}),
//         new THREE.MeshBasicMaterial({map: loader.load('card-vert.png'), rotation: 55}),
//         new THREE.MeshBasicMaterial({map: loader.load('card-vert.png'), rotation: 55}),
//     ];



//     var dirLight = new THREE.DirectionalLight( 0xffffff );
//     dirLight.position.set( -10, 10, 10 );
//     scene.add( dirLight );




//     var geometry = new THREE.BoxGeometry( .1, 2, 1 );
//     var material = new THREE.MeshPhongMaterial( { color: 0x00ff00 } );
//     var cube = new THREE.Mesh( geometry, material );
//     cube.castShadow = true;
//     cube.receiveShadow = true;

//     cube.scale.setScalar( 4 );

//     scene.add( cube );
//     // camera.position.z = 5;

//     cube.rotation.x += 120;
//     cube.rotation.y += 120;



//     // var raycaster = new THREE.Raycaster();
//     // var mouse = new THREE.Vector2();

    
//     // mountRef.current.addEventListener('mousemove', function (event) {
//     //     console.log('mouse move', event.clientX)
//     //     mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
//     //     mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
//     // }, false);

    
    
//     var animate = function () {
//       requestAnimationFrame( animate );
//         //   cube.rotation.x += 0.01;
//         //   cube.rotation.y += 0.01;
//       // console.log(`cam: `, camera.rotation.x);
      
//       // camera.rotation.x = -4;
//       // controls.rotation.x.set(x);
//       controls.update();
//       renderer.render( scene, camera );
//     }

//     let onWindowResize = function () {
//       camera.aspect = window.innerWidth / window.innerHeight;
//       camera.updateProjectionMatrix();
//       renderer.setSize( window.innerWidth, window.innerHeight );
//     }

//     window.addEventListener("resize", onWindowResize, false);

//     animate();

//     return () => mountRef.current.removeChild( renderer.domElement);
//   }, []);

//   return (
//     <div ref={mountRef}>

//     </div>
//   );
// }

// export default Vanilla;