let scrollTopValue = 0;
const x = document.getElementById("aboutText").position().top;
let y = window.screen.height -100;

window.addEventListener("scroll", (e) => {
    scrollTopValue = window.scrollY; 
    console.log(x.getBoundingClientRect().top + window.scrollY);
    console.log("Y:" + scrollTopValue);
    console.log("screen height: " + y);
});
