import { OrbitControls, useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';

const Model = () => {
  const { scene } = useGLTF('/hero_pc/scene.glb');
  return (
    <primitive 
        object={scene}
        scale={1.5}
        position={[0, -3, 0]}
        rotation={[-0.01, -0.2, -0.1]}
    />
  )
};

const ModelCanvas = () => {
  return (
    <Canvas
      shadows
      camera={{ position: [2, 2, 2], fov: 50 }}
    >
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Suspense fallback={null}>
        <Model />
        <OrbitControls />
      </Suspense>
    </Canvas>
  );
};

export default ModelCanvas;
