function GuessLogic(guess: string, WomanName: string) {
  let colorArray = [];

  for (let i = 0; i < guess.length; i += 1) {
    colorArray.push("black");
  }

  // green logic
  for (let i = 0; i < guess.length; i += 1) {
    if (guess[i] === WomanName[i]) {
      colorArray[i] = "51C446";
    }
  }

  // orange logic
  for (let i = 0; i < guess.length; i += 1) {
    if (WomanName.includes(guess[i])) {
      if (guess[i] !== WomanName[i]) {
        colorArray[i] = "E19C27";
      }
    }
  }

  return colorArray;
}

export default GuessLogic;
