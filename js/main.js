const options = {
    root: null,
    rootMargin: '0px',
    threshold: 1.0
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.remove('hidden');
            observer.unobserve(entry.target);
        }
    });
}, options);

let height = window.screen.availHeight;
let width = window.screen.availWidth;
const hiddenElements = document.querySelectorAll('.hidden');

if(height < 549 && width < 376){
    hiddenElements.forEach((el) => {
        el.classList.remove('hidden');
    })    
} else{
    hiddenElements.forEach((el) => observer.observe(el));
}