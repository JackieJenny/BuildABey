import { useRef, useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import { Group, Mesh } from 'three'

type Props = {
  modelName?: string
}

const OpponentBeyModel = ({ modelName }: Props) => {
  const ref = useRef<Group>(null)
  const finalModelName = modelName || "pegasus_opp"

  // If finalModelName is falsy for some reason, avoid rendering
  if (!finalModelName) return null

  const path = `/models/${finalModelName}.glb`
  const { scene } = useGLTF(path)

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

export default OpponentBeyModel
