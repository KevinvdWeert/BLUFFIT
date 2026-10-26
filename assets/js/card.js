function getRandomValue() {
  return Math.floor(Math.random() * 10) + 1;
}

function createCard(value) {
  const card = document.createElement("div");
  card.className = "card";
  card.dataset.value = value;

  card.innerHTML = [
    `<div class="card-corner top-left">${value}</div>`,
    `<div class="card-center">${value}</div>`,
    `<div class="card-corner bottom-right">${value}</div>`
  ].join("");

  return card;
}

