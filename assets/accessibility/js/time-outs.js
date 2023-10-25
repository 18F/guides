window.addEventListener('DOMContentLoaded', () => {
  let timer;
  const pForm = document.getElementById('pForm');

  Array.from(pForm.getElementsByTagName('input')).map((el) => {
    el.addEventListener('input', () => {
      if (timer) {
        clearTimeout(timer);
      }

      timer = setTimeout(() => {
        const c = confirm('Would you like more time to complete the form?');
        let timer;
        if (c == true) {
          clearTimeout(timer);
        } else {
          pForm.reset();
        }
      }, 2000);
    });
  });
});
