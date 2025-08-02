import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import TestBeyModel from '../components/TestBeyModel'

const Scene = () => {
  return (
    <>
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 5, 5]} />
        <TestBeyModel />
        <OrbitControls />
      </Canvas>
    </>
  )
}

export default Scene
