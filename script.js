// Tavern Portfolio - Interactive Effects

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add pixel art cursor effect
document.addEventListener('mousemove', (e) => {
    const sections = document.querySelectorAll('.tavern-section');
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        if (x > 0 && x < rect.width && y > 0 && y < rect.height) {
            section.style.boxShadow = `
                0 4px 0 var(--dark-brown),
                0 8px 0 rgba(0, 0, 0, 0.3),
                inset 0 1px 0 rgba(255, 255, 255, 0.2),
                inset 0 0 20px rgba(218, 165, 32, 0.2)
            `;
        } else {
            section.style.boxShadow = `
                0 4px 0 var(--dark-brown),
                0 8px 0 rgba(0, 0, 0, 0.3),
                inset 0 1px 0 rgba(255, 255, 255, 0.5)
            `;
        }
    });
});

// Button press effect
document.querySelectorAll('.tavern-button').forEach(button => {
    button.addEventListener('mousedown', function() {
        this.style.transform = 'translateY(2px)';
    });
    
    button.addEventListener('mouseup', function() {
        this.style.transform = 'translateY(-2px)';
    });
    
    button.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(-2px)';
    });
});

// Skill tag hover effect
document.querySelectorAll('.skill-tag').forEach(tag => {
    tag.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1) rotate(-2deg)';
    });
    
    tag.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) rotate(0deg)';
    });
});

// Project card interactions
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});



// Keyboard navigation hint
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown' || e.key === ' ') {
        window.scrollBy({
            top: window.innerHeight * 0.5,
            behavior: 'smooth'
        });
    } else if (e.key === 'ArrowUp') {
        window.scrollBy({
            top: -window.innerHeight * 0.5,
            behavior: 'smooth'
        });
    }
});

// Add subtle parallax effect on scroll
window.addEventListener('scroll', () => {
    const decorations = document.querySelectorAll('.pixel-decoration');
    const scrollY = window.scrollY;
    
    decorations.forEach((deco, index) => {
        const speed = (index % 2 === 0) ? 0.5 : -0.5;
        deco.style.transform = `translateY(${scrollY * speed}px)`;
    });
});

// Welcome message in console
console.log(`
%c🍺 Welcome to the Developer's Tavern! 🍺
%cA cozy pixel art portfolio by a game-loving developer
%cFeel free to explore, and don't forget to check out the projects!
`, 
'font-size: 20px; color: #DAA520; font-weight: bold;',
'font-size: 14px; color: #D2691E;',
'font-size: 12px; color: #8B4513;'
);
