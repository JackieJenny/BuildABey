import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import TestBeyModel from '../components/TestBeyModel'


const Scene = () => {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas camera={{ position: [0, 2, 5], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />
        <OrbitControls />
        <mesh position={[0, 0, 0]}>
          <TestBeyModel />
          <meshStandardMaterial color="orange" />
        </mesh>
      </Canvas>
    </div>
  )
}


export default Scene
