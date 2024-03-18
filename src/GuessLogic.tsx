function GuessLogic(guess: string, WomanName: string) {
  let colorArray = [];

  for (let i = 0; i < guess.length; i += 1) {
    colorArray.push("black");
  }

  for (let i = 0; i < guess.length; i += 1) {
    if (guess[i] === WomanName[i]) {
      colorArray[i] = "green";
    }
  }

  for (let i = 0; i < guess.length; i += 1) {
    if (WomanName.includes(guess[i])) {
      if (guess[i] !== WomanName[i]) {
        colorArray[i] = "orange";
      }
    }
  }

  return colorArray;
}

export default GuessLogic;
