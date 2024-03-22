function GuessLogic(guess: string, WomanName: string) {
  let colorArray = [];

  for (let i = 0; i < guess.length; i += 1) {
    colorArray.push("black");
  }

  // green logic
  for (let i = 0; i < guess.length; i += 1) {
    if (guess[i] === WomanName[i]) {
      colorArray[i] = "green";
    }
  }

  // orange logic
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
