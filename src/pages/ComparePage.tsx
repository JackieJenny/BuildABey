import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import TestBeyModel from '../components/TestBeyModel'


const Scene = () => {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas camera={{ position: [0, 2, 5], fov: 60 }}>
        <ambientLight intensity={0.8} />
        <directionalLight
          intensity={1}
          position={[0, 5, 5]}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <OrbitControls />
        <mesh position={[0, 0, 0]}>
          <TestBeyModel />
        </mesh>
      </Canvas>
    </div>
  )
}


export default Scene
