document.addEventListener('DOMContentLoaded', () => {
  const quotes = document.querySelectorAll('.quote-item');
  if (quotes.length === 0) return;

  let currentQuoteIndex = 0;

  function showNextQuote() {
    // Hide current quote
    quotes[currentQuoteIndex].classList.remove('active');
    
    // Increment index
    currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
    
    // Show next quote
    quotes[currentQuoteIndex].classList.add('active');
  }

  // Set interval for 5 seconds (5000ms)
  setInterval(showNextQuote, 5000);
});
