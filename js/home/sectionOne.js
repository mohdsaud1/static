const sectionOne = document.getElementById('sectionOne');
const rect = sectionOne.getBoundingClientRect();

document.addEventListener('scroll', () => {
    const clientHeight = document.documentElement.clientHeight;
    
    if(clientHeight + window.scrollY <= rect.top) {
        sectionOne.style.opacity = 1;
    }
})