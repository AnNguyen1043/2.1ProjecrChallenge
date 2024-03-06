import React from 'react'
import "./partsList.css"
import Parts from './Parts';

function PartsList({ partNum, path, selected, top = '50%', set }) {
  let parts = [];

  for (let i = 0; i < partNum; i++) {
    parts.push(
      <div key={path + i} className={selected === i + 1 ? 'selected clickable square' : 'clickable square'} onClick={() => set(i + 1)}>
        <Parts style={{
          height: 50,
          width: 50,
          position: "relative",
          objectFit: "cover",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }} partName={path} index={i + 1} top={top}></Parts>
      </div>
    );
  }

  return (
    <div className="list">{parts}</div>
  )
}

export default PartsList
