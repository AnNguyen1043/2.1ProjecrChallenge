import React from 'react'

//clxs for class merge

function Parts({ partName, index, zIndex = 1, width, style, className }) {
  return (
    <img
      className={[className].join(' ')}
      src={`./character/${partName}/${index}.png`}
      width={width}
      alt='' id='body'
      style={{ zIndex, left: 0, top: 0, ...style }} />
  )
}

export default Parts
