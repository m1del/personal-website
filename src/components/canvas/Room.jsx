import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';

import CanvasLoader from '../CanvasLoader';


const Model = () => {
    const { scene } = useGLTF('/room.glb');
    return (
      <mesh>
          <hemisphereLight intensity={0.3}/> {/* Reduced intensity */}
          <ambientLight intensity={0.5}/> {/* Reduced intensity */}
          <directionalLight 
            intensity={1} 
            position={[-5, 3, 0]} // Adjust position for the left window
            castShadow
          />
          <primitive
              object={scene}
              scale={0.007}
              position={[0, -2.8, 0]}
          />
      </mesh>
    )
  };

const Room = () => {
  return (
    <Canvas
        frameloop="demand"
        shadows
        camera={{position: [20, 3, 5], fov: 25}}
    >
        <Suspense fallback={<CanvasLoader/>}>
            <OrbitControls
                enableZoom={false}
                maxPolarAngle={Math.PI / 2}
                minPolarAngle={Math.PI / 3}
            />
            
            <Model/>

        </Suspense>
        <Preload all/>
    </Canvas>
  );
};

export default Room;
