import "./style.css";

let updateCard = () => {
  document.querySelector(".card").classList.add(generateRadomNaipe());
  document.querySelector(".card").innerHTML = generateRadomNumber();
};

let generateRadomNaipe = () => {
  let naipe = ["diamond", "spade", "heart", "club"];
  let indexNaipe = Math.floor(Math.random() * naipe.length);

  return naipe[indexNaipe];
};

let generateRadomNumber = () => {
  let numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "7",
    "8",
    "10",
    "J",
    "Q",
    "K"
  ];
  let indexNumbers = Math.floor(Math.random() * numbers.length);

  return numbers[indexNumbers];
};

window.onload = updateCard;

document.querySelector(".btn").addEventListener("click", updateCard);
