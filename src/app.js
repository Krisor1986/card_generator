import "./style.css";
import { randomCard } from "./card.js";

window.onload = function () {
  const card = document.querySelector("#card");
  const value = document.querySelector("#value");
  const description = document.querySelector("#card-description");
  const automatic = document.querySelector("#automatic");
  const names = { J: "Valete", Q: "Dama", K: "Rei", A: "Ás" };
  let intervalId;

  function drawCard() {
    const next = randomCard();
    // Replace the previous suit so the card always has exactly one suit class.
    card.className = `card ${next.suit.className}`;
    value.textContent = next.value;
    card.querySelectorAll(".suit").forEach(element => {
      element.textContent = next.suit.symbol;
    });
    const label = `${names[next.value] || next.value} de ${next.suit.name}`;
    card.setAttribute("aria-label", label);
    description.textContent = label;
  }

  function resetTimer() {
    clearInterval(intervalId);
    if (automatic.checked) intervalId = setInterval(drawCard, 10000);
  }

  document.querySelector("#draw").addEventListener("click", () => {
    drawCard();
    resetTimer();
  });
  automatic.addEventListener("change", resetTimer);
  document.querySelector("#dimensions").addEventListener("submit", event => {
    event.preventDefault();
    const width = document.querySelector("#width").valueAsNumber;
    const height = document.querySelector("#height").valueAsNumber;
    if (!Number.isFinite(width) || !Number.isFinite(height) || width < 180 || width > 440 || height < 240 || height > 600) return;
    card.style.width = `${width}px`;
    card.style.height = `${height}px`;
  });

  drawCard();
  resetTimer();
};
