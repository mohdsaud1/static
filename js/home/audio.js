const section = document.querySelector('.fade-section');

// Function to handle scroll event
function handleScroll() {
    const sectionTop = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    // If the section is fully visible in the viewport, fade it in
    if (sectionTop < windowHeight) {
        section.style.opacity = '1';
    } else {
        // Otherwise, fade it out
        section.style.opacity = '0';
    }
}

// Attach the scroll event listener
window.addEventListener('scroll', handleScroll);
// Trigger the initial check
handleScroll();