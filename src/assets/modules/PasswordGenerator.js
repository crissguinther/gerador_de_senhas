const arrNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const symbols = ["!", "@", "#", "$", "%", "^", "&", "*"];

export default class PasswordGenerator {
  constructor(options) {
    this.options = {
      size: 10,
      numbers: false,
      uppercase: false,
      symbols: false,
    };
    Object.assign(this.options, options);
  }

  generatePassArray() {
    let arr = letters.slice(0, letters.length);
    if (this.options.uppercase === true)
      arr = arr.concat(arr.map((letter) => letter.toUpperCase()));
    if (this.options.numbers === true) arr = arr.concat(arrNum);
    if (this.options.symbols === true) arr = arr.concat(symbols);
    console.log(arr);
    return arr;
  }

  generate() {
    let passArr = this.generatePassArray();
    let pass = [];
    for (let i = 1; i <= this.options.size; i++) {
      pass[i] = passArr[Math.floor(Math.random() * passArr.length)];
    }
    return pass.join("");
  }
}
