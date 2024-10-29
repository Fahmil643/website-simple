document.getElementById('search').addEventListener('keyup', function() {
    let input = this.value.toLowerCase(); // Get the value of the input
    let menuItems = document.querySelectorAll('.info1'); // Get all menu items

    // Loop through the menu items and filter based on the input
    menuItems.forEach(function(item) {
        let menuName = item.querySelector('h3').innerText.toLowerCase(); // Get the menu name from the h3 tag
        
        if (menuName.includes(input)) {
            item.style.display = ''; // Show the item if it matches
        } else {
            item.style.display = 'none'; // Hide the item if it doesn't match
        }
    });
});
