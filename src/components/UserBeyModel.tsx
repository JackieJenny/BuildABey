import { useRef, useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import { Group, Mesh } from 'three'

type Props = {
  modelName?: string
}

const UserBeyModel = ({ modelName }: Props) => {
  const ref = useRef<Group>(null)
  const finalModelName = modelName || "pegasus_self"  // fallback here
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



export default UserBeyModel
