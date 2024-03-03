import React from 'react'
import "./avatar.css"
import "./Parts.js"
import Parts from './Parts.js'

function Avatar({body,mouth,eyes,hair,nose,eyebrow,glasses,clothing1,clothing2,clothing3,randomise}) {
  return (
    <div>
      <div className='avatar'>
        <Parts partName={'body'} index={body} zIndex={1}></Parts>
        <Parts partName={'eyes'} index={eyes} zIndex={3}></Parts>
        <Parts partName={'hair'} index={hair} zIndex={3}></Parts>
        <Parts partName={'noses'} index={nose} zIndex={3}></Parts>
        <Parts partName={'mouths'} index={mouth} zIndex={3}></Parts>
        <Parts partName={'eyebrows'} index={eyebrow} zIndex={4}></Parts>
        <Parts partName={'accessories/glasses'} index={glasses} zIndex={4}></Parts>

        <Parts partName={'clothes/layer_1'} index={clothing1} zIndex={2}></Parts>
        <Parts partName={'clothes/layer_2'} index={clothing2} zIndex={2}></Parts>
        <Parts partName={'clothes/layer_3'} index={clothing3} zIndex={2}></Parts>

        {/*
        <Parts partName={'noses'} index={nose} zIndex={3}></Parts>
        
        <Parts partName={'eyebrows'} index={eyebrows} zIndex={3}></Parts>
        <Parts partName={'hair'} index={hair} zIndex={4}></Parts>
        <Parts partName={'facial_hair'} index={facial} zIndex={4}></Parts>

        <Parts partName={'accessories/earrings'} index={earrings} zIndex={4}></Parts>
        <Parts partName={'accessories/glasses'} index={glasses} zIndex={4}></Parts>
        <Parts partName={'accessories/hats'} index={hat} zIndex={5}></Parts>
        <Parts partName={'accessories/neckwear'} index={neckwear} zIndex={3}></Parts> */}
      </div>

      <div className="text-center">
          <button className="button" onClick={()=>randomise()}>
            Randomize!
          </button>
      </div>
    </div>
  )
}

export default Avatar
