import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';

import CanvasLoader from '../CanvasLoader';

const Model = () => {
  const { scene } = useGLTF('/rhyzome_plant.glb');
  return (
    <mesh>
        <hemisphereLight intensity={0.5} groundColor="black"/>
        <pointLight intensity={1} />
        <directionalLight position={[1,2,1]} intensity={2}/>
        <ambientLight intensity={0.8}/>
        
        <primitive
            object={scene}
            scale={2}
        />
    </mesh>

  )
};

const Rhyzome = () => {
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
                minPolarAngle={Math.PI / 2}
            />
            
            <Model/>

        </Suspense>
        <Preload all/>
    </Canvas>
  );
};

export default Rhyzome;
