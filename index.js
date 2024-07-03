// Add event listener to the search form
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    console.log('Search form submitted!');
});

// Add event listener to the "ADD TO CART" buttons
document.querySelectorAll('.product button').forEach(function(button) {
    button.addEventListener('click', function() {
        console.log('Added to cart!');
    });
});

// Add some animation to the navigation menu
document.querySelectorAll('nav li').forEach(function(li) {
    li.addEventListener('mouseover', function() {
        this.style.backgroundColor = '#f7f7f7';
    });
    li.addEventListener('mouseout', function() {
        this.style.backgroundColor = '';
    });
});