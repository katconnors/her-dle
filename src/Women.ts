interface Woman {
  name: string;
  quote: string;
  bio: string;
}

// Bio source from Wikipedia
// Quote source from https://www.inspiringquotes.us/

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
    bio: "Joan Ruth Bader Ginsburg was an American lawyer and jurist who served as an associate justice of the Supreme Court of the United States. ",
  },
];

export default Women;
