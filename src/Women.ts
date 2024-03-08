interface Woman {
  name: string;
  quote: string;
  bio: string;
}

// Bio source from Wikipedia
// Quotes sourced from https://www.inspiringquotes.us/ and https://en.wikiquote.org/

const Women: Woman[] = [
  {
    name: "Evelyn Boyd Granville",
    quote: "I always smile when I hear that women cannot excel in mathematics.",
    bio: "Evelyn Boyd Granville was the second African-American woman to receive a Ph.D. in mathematics from an American university.",
  },

  {
    name: "Ruth Bader Ginsburgh",
    quote:
      "My mother told me to be a lady. And for her, that meant be your own person, be independent.",
    bio: "Joan Ruth Bader Ginsburg was an American lawyer and jurist who served as an associate justice of the Supreme Court of the United States.",
  },

  {
    name: "Chien-Shiung Wu",
    quote:
      "There is a misconception in America that women scientists are all dowdy spinsters.",
    bio: "Chien-Shiung Wu was a Chinese-American particle and experimental physicist who made significant contributions in the fields of nuclear and particle physics.",
  },

  {
    name: "Maya Angelou",
    quote:
      "We delight in the beauty of butterfly, rarely admit the changes it has gone through to achieve that beauty.",
    bio: "Maya Angelou, born Marguerite Annie Johnson, was an American memoirist, poet, and civil rights activist. She published seven autobiographies, three books of essays, several books of poetry, and is credited with a list of plays, movies, and television shows spanning over 50 years.",
  },

  {
    name: "Amelia Earhart",
    quote:
      "Women must try to do things as men have tried. When they fail, their failure must be but a challenge to others.",
    bio: "Amelia Mary Earhart was an American aviation pioneer and writer. Earhart was the first female aviator to fly solo across the Atlantic Ocean.",
  },

  {
    name: "Kalpana Chawla",
    quote:
      "The path from dreams to success does exist. May you have the vision to find it, the courage to get on it and the perseverance to follow it.",
    bio: "Kalpana Chawla was an Indian-born American astronaut and aerospace engineer who was the first woman of Indian origin to fly to space.",
  },
];

export default Women;
