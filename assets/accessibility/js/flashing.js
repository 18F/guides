window.addEventListener('DOMContentLoaded', () => {
  let blinking = false;
  let interval;
  const blinkEl = document.getElementsByClassName('blink')[0];
  const blinkBtn = document.getElementById('blinkbutton');

  function toggleBlinking(el) {
    const { display } = el.style;
    if (display === 'inline') {
      el.style.display = 'none';
    } else {
      el.style.display = 'inline';
    }
  }

  blinkBtn.addEventListener('click', () => {
    if (!blinking) {
      blinkBtn.innerText = 'Click to stop blinking';
      interval = setInterval(() => {
        toggleBlinking(blinkEl);
      }, 200);
      blinking = true;
    } else {
      clearInterval(interval);
      blinkBtn.innerText = 'Click to see non-compliant flashing';
      blinkEl.style.display = 'none';
      blinking = false;
    }
  });
});
