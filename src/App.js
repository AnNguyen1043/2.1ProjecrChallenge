import React, { useState, useEffect } from 'react'
import './App.css'
import Avatar from './components/Avatar'
import PartsList from './components/PartsList';

const partNum = {
  body: 17,
  eyes: 17,
  hair: 73,
  mouths: 24,
  eyebrows: 15,
  glasses: 17,

  clothing1: 5,
  clothing2: 5,
  clothing3: 9,

  noses: 1,
  facial: 17,
  earrings: 32,
  hats: 28,
  neckwears: 18

};



function App() {
  const [body, setBody] = useState(1)
  const [eyes, setEyes] = useState(1)
  const [hair, setHair] = useState(1)

  const [mouths, setMouths] = useState(1)
  const [eyebrows, setEyebrows] = useState(1)
  const [glasses, setGlasses] = useState(1)

  const [clothing1, setClothing1] = useState(1)
  const [clothing2, setClothing2] = useState(1)
  const [clothing3, setClothing3] = useState(1)

  const [noses, setNoses] = useState(1)

  const [avatar, setAvatar] = useState({
    body: 1,
    eyes: 1,
    hair: 1,

    mouth: 1,
    eyebrow: 1,
    glasses: 1,

    clothing1: 1,
    clothing2: 1,
    clothing3: 1,

    nose: 1
  })

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

    setAvatar({
      body: Math.floor(Math.random() * partNum.body),
      eyes: Math.floor(Math.random() * partNum.eyes),
      hair: Math.floor(Math.random() * partNum.hair),
      mouth: Math.floor(Math.random() * partNum.mouths),
      eyebrow: Math.floor(Math.random() * partNum.eyebrows),
      glasses: Math.floor(Math.random() * partNum.glasses),
      clothing1: Math.floor(Math.random() * partNum.clothing1),
      clothing2: Math.floor(Math.random() * partNum.clothing2),
      clothing3: Math.floor(Math.random() * partNum.clothing3),
      nose: 1
    })

  }

  useEffect(() => {
    randomise()
  }, [])

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
            <PartsList
              partNum={partNum.body}
              path="body"
              // set={(id) => setAvatar(prev => ({ ...prev, body: id }))}
              set={onBodyChange}//. Gen: (id) => setAvatar(prev => ({ ...prev, body: id }))}
              selected={body} />
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
