import React, { useState } from 'react'
import './App.css'
import Avatar from './components/Avatar'
import PartsList from './components/PartsList';
import Parts from './components/Parts';
import { genBodyImgPaths, partNum } from './constains/avatar-metadata';

const randomPath = (partName, partNum) => {
  return `./character/${partName}/${Math.floor(Math.random() * partNum) + 1}.png`
}

const randomAvatar = () => {
  return {
    body: randomPath('body', partNum.body),
    // eyes: Math.floor(Math.random() * partNum.eyes),
    // hair: Math.floor(Math.random() * partNum.hair),
    // mouth: Math.floor(Math.random() * partNum.mouths),
    // eyebrow: Math.floor(Math.random() * partNum.eyebrows),
    // glasses: Math.floor(Math.random() * partNum.glasses),
    // clothing1: Math.floor(Math.random() * partNum.clothing1),
    // clothing2: Math.floor(Math.random() * partNum.clothing2),
    // clothing3: Math.floor(Math.random() * partNum.clothing3),
    nose: 1
  }
}

function App() {
  // const [body, setBody] = useState(1)
  const [eyes, setEyes] = useState(1)
  const [hair, setHair] = useState(1)

  const [mouths, setMouths] = useState(1)
  const [eyebrows, setEyebrows] = useState(1)
  const [glasses, setGlasses] = useState(1)

  const [clothing1, setClothing1] = useState(1)
  const [clothing2, setClothing2] = useState(1)
  const [clothing3, setClothing3] = useState(1)

  const [noses, setNoses] = useState(1)
  const [avatar, setAvatar] = useState(randomAvatar)

  const bodyListImgs = genBodyImgPaths(partNum.body);


  console.log(`avatar : `, avatar);



  const onChangeAvatar = (fileName) => {
    return (fieldValue) => setAvatar(prev => ({ ...prev, [fileName]: fieldValue }))
  }

  const onBodyChange = onChangeAvatar('body') // (fieldValue) => setAvatar(prev => ({ ...prev, body: fieldValue }))
  // const eyesChange = onChangeAvatar('eyes')
  // const hairChange = onChangeAvatar('hair')
  // const mouthChange = onChangeAvatar('mouth')
  // const eyebrowChange = onChangeAvatar('eyebrow')

  function randomise() {
    // setBody(Math.floor(Math.random() * partNum.body));
    // setEyes(Math.floor(Math.random() * partNum.eyes));
    // setHair(Math.floor(Math.random() * partNum.hair));
    // setMouths(Math.floor(Math.random() * partNum.mouths));
    // setNoses(1);
    // console.log("nose", noses)
    // setClothing1(Math.floor(Math.random() * partNum.clothing1));
    // setClothing2(Math.floor(Math.random() * partNum.clothing2));
    // setClothing3(Math.floor(Math.random() * partNum.clothing3));

    // setEyebrows(Math.floor(Math.random() * partNum.eyebrows));
    // setGlasses(Math.floor(Math.random() * partNum.glasses));

    setAvatar()

  }

  return (
    <div className="App">
      <div className="title">CHARACTER</div>
      <div className="subtitle">🛠️CUSTOMIZATION🛠️</div>
      <div className="divider-line"></div>

      <div className='avatar-group gap-30'>
        <div>
          <div className='avatar-wrapper'>
            <Avatar
              body={avatar.body}
              eyes={eyes}
              hair={hair}
              mouth={mouths}
              eyebrow={eyebrows}
              glasses={glasses}
              clothing1={clothing1}
              clothing2={clothing2}
              clothing3={clothing3}

              nose={noses}

              randomise={randomise}
            ></Avatar>
          </div>
        </div>

        <div>
          <div className="list-section">
            <h2>Body</h2>
            <PartsList>
              {bodyListImgs.map((path, i) => {

                return <Parts key={path + i}
                  onClick={() => onBodyChange(path)}
                  src={path}
                  className={avatar.body === path ? 'selected clickable square' : 'clickable square'}
                  index={i + 1}
                  style={{
                    height: 50,
                    width: 50,
                    position: "relative",
                    objectFit: "cover",
                    backgroundPosition: "center",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }} />
              })}
            </PartsList>
          </div>

          <div className="list-section">
            <h2>Eyes</h2>
            <PartsList
              partNum={partNum.eyes}
              path="eyes"
              set={setEyes}
              selected={eyes}
              zoom={2.5}
              top='35px'
            />
          </div>

          <div className="list-section">
            <h2>Hair</h2>
            <PartsList
              partNum={partNum.hair}
              path="hair"
              set={setHair}
              selected={hair} />
          </div>

          <div className="list-section">
            <h2>Nose</h2>
            <PartsList
              partNum={partNum.noses}
              path="noses"
              set={setNoses}
              selected={noses}
              zoom={2.5}
              top='35px'
            />
          </div>

          <div className="list-section">
            <h2>Mouth</h2>
            <PartsList
              partNum={partNum.mouths}
              path="mouths"
              set={setMouths}
              selected={mouths}
              zoom={2}
            />
          </div>

          <div className="list-section">
            <h2>Eyebrow</h2>
            <PartsList
              partNum={partNum.eyebrows}
              path="eyebrows"
              set={setEyebrows}
              selected={eyebrows} />
          </div>

          <div className="list-section">
            <h2>Glasses</h2>
            <PartsList
              partNum={partNum.glasses}
              path="accessories/glasses"
              set={setGlasses}
              selected={glasses} />
          </div>

          <div className="list-section">
            <h2>clothing 1</h2>
            <PartsList
              partNum={partNum.clothing1}
              path="clothes/layer_1"
              set={setClothing1}
              selected={clothing1}
            // zoom={2}
            />
          </div>

          <div className="list-section">
            <h2>clothing 2</h2>
            <PartsList
              partNum={partNum.clothing2}
              path="clothes/layer_2"
              set={setClothing2}
              selected={clothing2}
            // zoom={2}
            />
          </div>

          <div className="list-section">
            <h2>clothing 3</h2>
            <PartsList
              partNum={partNum.clothing3}
              path="clothes/layer_3"
              set={setClothing3}
              selected={clothing3}
              zoom={2}
              top='-15px'
            />
          </div>


        </div>



      </div>

    </div>
  )
}

export default App
