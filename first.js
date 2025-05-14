// References to elements
const headlinesContainer = document.querySelector('.headlines2');
const leftBtn = document.querySelector('.left-btn');
const rightBtn = document.querySelector('.right-btn');

// Manual scrolling with buttons
leftBtn.addEventListener('click', () => {
    headlinesContainer.scrollBy({
        left: -300, // Adjust scroll amount
        behavior: 'smooth',
    });
});

rightBtn.addEventListener('click', () => {
    headlinesContainer.scrollBy({
        left: 300, // Adjust scroll amount
        behavior: 'smooth',
    });
});

// Autoplay scrolling
let autoplayScrollInterval;

function startAutoplay() {
    autoplayScrollInterval = setInterval(() => {
        headlinesContainer.scrollBy({
            left: 3, // Increased speed of scroll
            behavior: 'smooth',
        });

        // Reset to the start when the end is reached
        if (
            headlinesContainer.scrollLeft + headlinesContainer.clientWidth >=
            headlinesContainer.scrollWidth
        ) {
            headlinesContainer.scrollTo({ left: 0, behavior: 'smooth' });
        }
    }, 5); // Reduced interval for faster scrolling
}

// Stop autoplay when user interacts
function stopAutoplay() {
    clearInterval(autoplayScrollInterval);
}

// Start autoplay when the page loads
startAutoplay();

// Stop autoplay on hover and resume on mouse leave
// headlinesContainer.addEventListener('mouseenter', stopAutoplay);
// headlinesContainer.addEventListener('mouseleave', startAutoplay);
// function toggleMenu() {
//     const navbarLinks = document.querySelector('.navbar-links');
//     navbarLinks.classList.toggle('active');
// }



        //  id pass of nav and footer
 window.onload = function() {
    fetch('navbar.html')
            .then(response => response.text())
      .then(data => {
           document.getElementById('navbar').innerHTML = data;
              })
       .catch(error => console.log('Error loading navbar:', error));
 
 
        fetch('footer.html')
          .then(response => response.text())
          .then(data => {
            document.getElementById('footer').innerHTML = data;
          })
          .catch(error => console.log('Error loading footer:', error));
    }
 
 