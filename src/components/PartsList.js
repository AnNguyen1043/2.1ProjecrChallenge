import React from 'react'
import "./partsList.css"

function PartsList({partNum, path,selected, zoom=1, top = '50%' ,set}) {
  let parts = [];
  for (let i = 0; i < partNum; i++) {
    parts.push(

        <div key={path + i} className={selected === i+1 ? 'selected clickable square' : 'clickable square'} onClick={() => set(i+1)}>
            <img src={`character/${path}/${i+1}.png`} alt="" className="img-center" height={60 * zoom} style={{ top }} />
        </div>
    );
  }

  return (
    <div className="list">{parts}</div>
  )
}

export default PartsList
