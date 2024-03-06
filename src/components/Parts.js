import React from 'react'

//clxs for class merge

function Parts({ src, zIndex = 1, width, style, className, onClick }) {
  return (
    <img
      onClick={onClick}
      className={[className].join(' ')}
      src={src}
      width={width}
      alt='' id='body'
      style={{ zIndex, left: 0, top: 0, ...style }} />
  )
}

export default Parts

// start => A => B => C
// C => B => A => start