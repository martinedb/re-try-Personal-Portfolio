// work-experience.js - Flip card logic for work experience cards

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.work-flip-card').forEach(function(card) {
    card.addEventListener('click', function() {
      card.classList.toggle('flipped');
    });
    card.addEventListener('keypress', function(e) {
      if (e.key === 'Enter' || e.key === ' ') card.classList.toggle('flipped');
    });
  });
});
