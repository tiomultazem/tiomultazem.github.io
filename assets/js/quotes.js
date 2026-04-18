document.addEventListener('DOMContentLoaded', () => {
  const quotes = document.querySelectorAll('.quote-item');
  if (quotes.length === 0) return;

  let currentQuoteIndex = 0;

  function showNextQuote() {
    const previousQuote = quotes[currentQuoteIndex];
    
    // 1. Mark current as exit
    previousQuote.classList.add('exit');
    previousQuote.classList.remove('active');
    
    // 2. Prepare next index
    currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
    const nextQuote = quotes[currentQuoteIndex];
    
    // 3. Set the next as active
    nextQuote.classList.add('active');

    // 4. Clean up the exit class after animation finishes (0.6s)
    setTimeout(() => {
      previousQuote.classList.remove('exit');
    }, 600);
  }

  // Set interval for 5 seconds
  setInterval(showNextQuote, 5000);
});
