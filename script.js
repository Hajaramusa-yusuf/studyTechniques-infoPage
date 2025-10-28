// Get all cards
const cards = document.querySelectorAll('.technique');

// Loop through each card individually
cards.forEach(card => {
  const info = card.querySelector('.info');
  const arrow = card.querySelector('.arrow');

  // Add a click event listener to this specific card
  card.addEventListener('click', () => {
    const isHidden = info.style.display === 'none' || info.style.display === '';

    if (isHidden) {
      info.style.display = 'block';
      arrow.textContent = '▲';
    } else {
      info.style.display = 'none';
      arrow.textContent = '▼';
    }
  });
});
