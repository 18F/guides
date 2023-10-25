window.addEventListener('DOMContentLoaded', () => {
  const moveFocusLinks = document.getElementsByClassName('moveFocus');
  const keyboardTrapLinks = document.getElementsByClassName('keyboardTrap');

  function handleFocus() {
    keyboardTrapLinks[0].focus();
  }

  Array.from(moveFocusLinks).map((el) => {
    el.addEventListener('focus', handleFocus);
  });

  Array.from(keyboardTrapLinks).map((el) => {
    el.addEventListener('click', () => {
      Array.from(moveFocusLinks).map((el) => {
        el.removeEventListener('focus', handleFocus);
      });
    });
  });
});
