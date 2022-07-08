import "./assets/css/style.css";
import PasswordGenerator from "./assets/modules/PasswordGenerator";

const form = document.querySelector("form");
const inputs = form.querySelectorAll("input");

function generatePassword() {
  let options = {};
  for (let input of inputs) {
    if (input.type === "checkbox") options[input.name] = input.checked;
    else options[input.name] = Number(input.value);
  }
  const passGen = new PasswordGenerator(options);
  return passGen.generate();
}

form.addEventListener("submit", (e) => {
  const results = document.querySelector(".results");
  e.preventDefault();
  results.classList.add("results");
  results.innerText = `Senha gerada: ${generatePassword()}`;
});
