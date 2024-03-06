import React from 'react'
import "./partsList.css"
import Parts from './Parts';

// const PartItem = ({ }) => {
//   return <div key={path + i} className={selected === i + 1 ? 'selected clickable square' : 'clickable square'} onClick={() => set(i + 1)}>
//     <Parts style={{
//       height: 50,
//       width: 50,
//       position: "relative",
//       objectFit: "cover",
//       backgroundPosition: "center",
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//     }} partName={path} index={i + 1} top={top} />
//   </div>
// }

function PartsList({ children }) {

  return (
    <div className="list">{children}</div>
  )
}

export default PartsList
