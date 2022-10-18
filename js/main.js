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

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));