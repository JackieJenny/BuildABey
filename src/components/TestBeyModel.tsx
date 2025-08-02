import { useGLTF } from '@react-three/drei'
import { useRef } from 'react'
import { Group } from 'three'

const TestBeyModel = () => {
  const ref = useRef<Group>(null)
  const { scene } = useGLTF('/models/leone.glb') // path relative to `public/`

  return <primitive ref={ref} object={scene} />
}

export default TestBeyModel

// Required by drei for .glb support
useGLTF.preload('/models/pegasus.glb')