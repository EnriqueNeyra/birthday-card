const card = document.getElementById('card');

function flipCard() {
  card.classList.toggle('is-flipped');
}

function createConfetti() {
  const confettiColors = ['#ff5722', '#ff9800', '#ffc107', '#ffeb3b', '#8bc34a'];
  for (let i = 0; i < 300; i++) { // Dense confetti
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    confetti.style.backgroundColor = confettiColors[Math.floor(Math.random() * confettiColors.length)];
    confetti.style.left = `${Math.random() * 100}vw`;
    confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;
    confetti.style.animationDelay = `${Math.random() * 5}s`;
    confetti.style.transform = `translateY(${Math.random() * -200 - 100}vh)`; // Start above view
    document.body.appendChild(confetti);
  }
}

createConfetti();
