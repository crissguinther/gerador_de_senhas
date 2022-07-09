import "./assets/css/style.css";
import PasswordGenerator from "./assets/modules/PasswordGenerator";

const form = document.querySelector("form");
const inputs = form.querySelectorAll("input");

function generatePassword() {
  let options = {};
  for (let input of inputs) {
    if (input.type === "checkbox") options[input.name] = input.checked;
    else {
      if (input.value > 50) input.value = 50;
      options[input.name] = Number(input.value);
    }
  }
  const passGen = new PasswordGenerator(options);
  return passGen.generate();
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const results = document.querySelector(".results");
  results.classList.add("results");
  results.innerText = `Senha gerada: ${generatePassword()}`;
});
