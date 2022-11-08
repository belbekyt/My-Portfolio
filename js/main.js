let hiddenElements = document.querySelectorAll('.add-hidden');

const options = {
    root: null,
    rootMargin: '0px',
    threshold: 1.0
}

const ios = () => {
    if (typeof window === `undefined` || typeof navigator === `undefined`) return false;

    return /iPhone|iPad|iPod/i.test(navigator.userAgent || navigator.vendor || (window.opera && opera.toString() === `[object Opera]`));
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.remove('hidden');
            observer.unobserve(entry.target);
        }
    });
}, options);

if(!ios()){
    hiddenElements.forEach(el => {
        el.classList.remove('add-hidden');
        el.classList.add('hidden');
        observer.observe(el);
    })
}