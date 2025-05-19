// Add event listener to the navigation links
document.querySelectorAll('.nav-link').forEach(function (link) {
    link.addEventListener('click', function () {
        // Toggle visibility of different sections of the website based on which link is clicked
        document.querySelectorAll('.section').forEach(function (section) {
            section.style.display = 'none';
        });
        document.getElementById(link.getAttribute('href')).style.display =
            'block';
    });
});