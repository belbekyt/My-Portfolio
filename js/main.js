let scrollTopValue = 0;
const x = document.getElementById("aboutText");

window.addEventListener("scroll", (e) => {
    scrollTopValue = window.scrollY; 
    console.log(x.getBoundingClientRect().top + window.scrollY);
    console.log("Y:" + scrollTopValue);
});
