import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import TestBeyModel from '../components/TestBeyModel'


const SceneCanvas = ({ children }: { children: React.ReactNode }) => (
  <div style={{ flex: 1, height: '100vh' }}>
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
      {children}
    </Canvas>
  </div>
)

const ComparePage = () => {
  return (
    <div style={{ display: 'flex', width: '100vw', height: '100vh' }}>
      <SceneCanvas>
        <TestBeyModel key="left" />
      </SceneCanvas>
      <SceneCanvas>
        <mesh>
          <boxGeometry />
          <meshStandardMaterial color="red" />
        </mesh>
      </SceneCanvas>
    </div>
  )
}


export default ComparePage
