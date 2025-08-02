import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import UserBeyModel from '../components/UserBeyModel'
import OpponentBeyModel from '../components/OpponentBeyModel'
import { Environment } from '@react-three/drei'




const SceneCanvas = ({ children }: { children: React.ReactNode }) => (
  <div style={{ flex: 1, height: '100%' }}>
    <Canvas camera={{ position: [0, 2, 5], fov: 60 }} shadows>
      <Environment preset="dawn" />
      <ambientLight intensity={0.3} />
      <OrbitControls />
      {children}
    </Canvas>
  </div>
)

const ComparePage = () => {
  return (
    <div style={{ width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Top empty quarter */}
      <div style={{ flex: 1 }} />
      {/* Middle half with canvases and VS text */}
      <div style={{ flex: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ flex: 1, height: '100%' }}>
          <SceneCanvas>
            <UserBeyModel key="left" />
          </SceneCanvas>
        </div>
        <div style={{ flex: 1, height: '100%' }}>
          <SceneCanvas>
            <OpponentBeyModel key="right"/>
          </SceneCanvas>
        </div>
      </div>
      {/* Bottom empty quarter */}
      <div style={{ flex: 1 }} />
    </div>
  )
}


export default ComparePage
