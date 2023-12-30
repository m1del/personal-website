import { Line, OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Canvas } from '@react-three/fiber';
import { Suspense, useEffect, useState } from "react";

import CanvasLoader from "../CanvasLoader";

const Computers = () => {
  const computer = useGLTF('/hero_pc/scene.gltf');

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black"/>
      <pointLight intensity={1} />
      <directionalLight position={[1,1,1]} intensity={2}/>
      <ambientLight intensity={0.5}/>

      <primitive 
        object={computer.scene}
        scale={1.5}
        position={[0, -3, 0]}
        rotation={[-0.01, -0.2, -0.1]}
      />

    </mesh>
  )
}

const ComputersCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{position: [20, 3, 5], fov: 25}}
      gl={{preserveDrawingBuffer: true}}
    >
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls 
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers/>
      </Suspense>

      <Preload all/>
    </Canvas>
  )
}

export default ComputersCanvas;