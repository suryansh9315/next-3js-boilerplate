import React from 'react'

const Floor = (props) => {
  return (
    <mesh {...props} recieveShadow={true}>
      <boxBufferGeometry args={[20,1,10]} />
      <meshPhysicalMaterial color='royalblue' />
    </mesh>
  )
}

export default Floor