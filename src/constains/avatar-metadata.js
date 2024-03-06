

export const partNum = {
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

export const genBodyImgPaths = (num) => {
  const bodyImgPaths = [];
  for (let i = 0; i < num; i++) {
    bodyImgPaths.push(`./character/body/${i + 1}.png`);
  }
  return bodyImgPaths;
};

export const genEyesImgPaths = (num) => {
  const eyesImgPaths = [];
  for (let i = 0; i < num; i++) {
    eyesImgPaths.push(`./character/eyes/${i + 1}.png`);
  }
  return eyesImgPaths;
};


