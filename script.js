// Theme Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = themeToggleBtn.querySelector('i');
    const themeText = themeToggleBtn.querySelector('span');
    
    // Check for saved theme or prefer-color-scheme
    const savedTheme = localStorage.getItem('theme') || 
                      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    
    // Apply the saved theme
    if (savedTheme === 'dark') {
        document.body.classList.add('dark');
        themeIcon.className = 'fas fa-sun';
        themeText.textContent = 'Light Mode';
    }
    
    // Toggle theme function
    function toggleTheme() {
        document.body.classList.toggle('dark');
        
        if (document.body.classList.contains('dark')) {
            themeIcon.className = 'fas fa-sun';
            themeText.textContent = 'Light Mode';
            localStorage.setItem('theme', 'dark');
        } else {
            themeIcon.className = 'fas fa-moon';
            themeText.textContent = 'Switch Theme';
            localStorage.setItem('theme', 'light');
        }
    }
    
    // Event listener for theme toggle button
    themeToggleBtn.addEventListener('click', toggleTheme);
    
    // Add hover effects to cards
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'transform 0.3s, box-shadow 0.3s';
        });
    });
    
    // Update profile image with a placeholder if the original doesn't load
    const profileImg = document.getElementById('profile-img');
    profileImg.addEventListener('error', function() {
        this.src = 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80';
    });
    
    // Add GitHub link functionality
    const githubLink = document.querySelector('a[aria-label="GitHub"]');
    if (githubLink) {
        githubLink.addEventListener('click', function(e) {
            if (!this.getAttribute('href') || this.getAttribute('href') === '#') {
                e.preventDefault();
                window.open('https://github.com/Ciel-prog', '_blank');
            }
        });
    }
});
