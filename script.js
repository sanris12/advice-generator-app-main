const advice = document.querySelector(".advice");
const dice = document.querySelector(".dice");
const author = document.querySelector(".author");

dice.addEventListener("click", function (e) {
  e.target.classList.add("dice-animasi");
  setTimeout(() => {
    api(e.target);
  }, 1000);
});

function api(element) {
  fetch("https://api.quotable.io/random?tags=technology,famous-quotes&_=${Date.now()}")
    .then((response) => response.json())
    .then((data) => {
      let quotes = `"${data.content}"`;
      advice.innerText = quotes;
      author.innerText = data.authorSlug.toUpperCase();
    })
    .catch((error) => console.log(error))
    .finally(element.classList.remove("dice-animasi"));
}
