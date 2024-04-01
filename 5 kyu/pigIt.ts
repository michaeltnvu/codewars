// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

export const pigIt = (a: string): string => {
  const words: string[] = a.split(" ");
  const pigLatinWords: string[] = words.map((word) => {
    if (/^[a-zA-Z]+$/.test(word)) {
      return word.slice(1) + word[0] + "ay";
    } else {
      return word;
    }
  });

  return pigLatinWords.join(" ");
};

// OR

export const pigLatin = (a: string) => a.replace(/(\w)(\w+)*/g, "$2$1ay");
