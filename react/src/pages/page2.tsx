import { MapControls, OrthographicCamera } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Line } from '@react-three/drei'
import { ReactElement } from 'react'
import { Euler } from 'three'

const Page2 = (): ReactElement => {
  return (
    <>
      <Canvas style={{ height: '100vH' }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <gridHelper
          args={[20, 20, 0xff0000, 'teal']}
          rotation={new Euler(1.5708)}
        />

        <OrthographicCamera
          makeDefault
          position={[0, 0, 3]}
          // zoom={orthoZoom || orthoCameraZoom}
          zoom={50}
          up={[0, 0, 1]}
        />

        <MapControls
          makeDefault
          // ref={mapControlsRef}
          // enabled={!isLocked}
          enableRotate={false}
          autoRotate={false}
          // target={rotationTarget.v}
          target={[0, 0, 0]}
          dampingFactor={1}
          // this is needed as we not only want to move in a birds-eye-view but
          // also want to e.g. jump into the local view of a wall (together with
          // position and target)
          // test
          screenSpacePanning={true}
        />
        <Line
          points={[[-3, 0, 0], [-3, 5, 0]]}       // Array of points, Array<Vector3 | Vector2 | [number, number, number] | [number, number] | number>
          color="black"                   // Default
          lineWidth={4}                   // In pixels (default)
          segments                        // If true, renders a THREE.LineSegments2. Otherwise, renders a THREE.Line2
          dashed={false}                  // Default
        />
      </Canvas>
    </>
  )
}

export default Page2
