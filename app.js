//Movment Animation to happen
const card = document.querySelector(".card");
const container = document.querySelector(".container");
//Items
const title = document.querySelector(".title");
const sneaker = document.querySelector(".sneaker img");
const purchase = document.querySelector(".purchase button");
const decsreptions = document.querySelector(".info h3");
const sizes = document.querySelector(".sizes");

const animatedCard = (
  titleAnim,
  sneakerAnimOne,
  sneakerAnimTwo,
  decsreptionsAnim,
  sizesAnim,
  purchasAnime
) => {
  title.style.transform = `translateZ(${titleAnim}px)`;
  sneaker.style.transform = `translateZ(${sneakerAnimOne}px) rotateZ(${sneakerAnimTwo}deg)`;
  decsreptions.style.transform = `translateZ(${decsreptionsAnim}px)`;
  sizes.style.transform = `translateZ(${sizesAnim}px)`;
  purchase.style.transform = `translateZ(${purchasAnime}px)`;
};

//Moving Animation Event
container.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
//Animate IN
container.addEventListener("mouseenter", () => {
  card.style.transition = "none";
  //Popout
  animatedCard(150, 200, -25, 125, 100, 75);
});
//Animate OUT
container.addEventListener("mouseleave", () => {
  card.style.transition = "all 0.5s ease";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  //Popback
  animatedCard(0, 0, 0, 0, 0, 0);
});
