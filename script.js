const h1 = document.querySelectorAll("#page6 h1");
const heroimg = document.querySelector("#heroimg");
const crsr = document.querySelector("#crsr");
const circle = document.querySelectorAll("#page6 .elem .circle");
let nav = document.querySelector("#navbar");

const scroll = new LocomotiveScroll({
  el: document.querySelector("main"),
  smooth: true,
  
});




function toggleMenu() {
  const menuIcon = document.querySelector(".menu-icon");
  menuIcon.classList.toggle("open");
}
const tl = gsap.timeline();
tl.from("nav", {
  y: -50,
  duration: 1,
  opacity: 0,
  scale: 0,
});

tl.from("#page1 h1", {
  y: 100,
  duration: 0.5,
  opacity: 0,
  scale: 0.8,
  stagger: 0.1,
});
tl.from(heroimg,{
  opacity:0,
  scale:2,
  
})
// =====================================================================================
circle.forEach(function (elem, i) {
  elem.addEventListener("click", () => {
    removecircle();
    removeh1()
    elem.style.background = "black";
    h1[i].style.display = "block"})
})

function removecircle() {
  circle.forEach(function (elem, i) {
    elem.style.backgroundColor = "white"})}
function removeh1(){
h1.forEach((elem,index)=>{
   elem.style.display ='none';
})}