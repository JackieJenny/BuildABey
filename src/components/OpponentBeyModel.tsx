import { useRef, useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import { Group, Mesh } from 'three'

const OpponentBeyModel = () => {
  const ref = useRef<Group>(null)
  const { scene } = useGLTF('/models/leone.glb')

  useEffect(() => {
    scene.traverse((child) => {
      if ((child as Mesh).isMesh) {
        child.castShadow = true
        child.receiveShadow = true
      }
    })
  }, [scene])

  return <primitive ref={ref} object={scene} />
}

useGLTF.preload('/models/leone.glb')

export default OpponentBeyModel
