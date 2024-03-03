import React from 'react'

function Parts({partName, index, zIndex}) {
  return (
    <img src={`./character/${partName}/${index}.png`} width={260} alt='' id='body' style={{zIndex, position: 'absolute', left: 0, top: 0}}/>
  )
}

export default Parts
