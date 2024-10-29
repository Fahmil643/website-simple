document.addEventListener("DOMContentLoaded", function() {
    // Select all the rating elements
    const ratings = document.querySelectorAll(".rating");
    
    // Loop through each rating element
    ratings.forEach(rating => {
        let stars = ''; // Initialize the stars string

        const ratingValue = 4; // Change this value dynamically for different ratings (e.g., 4 stars out of 5)

        for (let i = 1; i <= 5; i++) {
            if (i <= ratingValue) {
                stars += '<span class="filled-star">★</span>'; // Filled star with class for yellow color
            } else {
                stars += '<span class="empty-star">☆</span>'; // Empty star
            }
        }

        // Insert stars into the rating element
        rating.innerHTML = stars;
    });
});

// Get the elements
const menuIcon = document.getElementById('menu-icon');
const navbarMenu = document.getElementById('navbar-menu');
const navbarIcon = document.getElementById('navbar-icon');

// Add click event to the menu icon
menuIcon.addEventListener('click', function() {
    // Toggle the 'active' class on navbar-menu
    navbarMenu.classList.toggle('active');
    navbarIcon.classList.toggle('active');
});

// order oline
document.getElementById('order').addEventListener('click', function(event) {
    event.preventDefault(); // Mencegah tautan dari mengikuti URL
    const gallery = document.getElementById('gallery');
    gallery.style.display = gallery.style.display === 'none' ? 'block' : 'none'; // Toggle galeri
});


