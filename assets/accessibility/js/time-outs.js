/* eslint no-alert: 0 */
window.addEventListener('DOMContentLoaded', () => {
  let timer;
  const pForm = document.getElementById('pForm');

  Array.from(pForm.getElementsByTagName('input')).forEach((el) => {
    el.addEventListener('input', () => {
      if (timer) {
        clearTimeout(timer);
      }

      timer = setTimeout(() => {
        const c = window.confirm(
          'Would you like more time to complete the form?',
        );

        if (c === true) {
          clearTimeout(timer);
        } else {
          pForm.reset();
        }
      }, 2000);
    });
  });
});
