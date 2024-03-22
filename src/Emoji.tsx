import GuessLogic from "./GuessLogic";

// https://emojipedia.org/

function Emoji(PreviousGuesses: string[], WomanName: string) {
  const EmojiList: string[] = [];
  for (const guess of PreviousGuesses) {
    EmojiList.push("\n");
    const ColorArray = GuessLogic(guess, WomanName);
    for (const color of ColorArray) {
      if (color === "51C446") {
        EmojiList.push("🟩");
      } else if (color === "E19C27") {
        EmojiList.push("🟧");
      } else {
        EmojiList.push("⬛");
      }
    }
  }
  const JoinedEmojiList = EmojiList.join(" ");
  return JoinedEmojiList;
}

export default Emoji;
