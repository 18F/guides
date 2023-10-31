window.addEventListener('DOMContentLoaded', () => {
  const moveFocusLinks = document.getElementsByClassName('moveFocus');
  const keyboardTrapLinks = document.getElementsByClassName('keyboardTrap');

  function handleFocus() {
    keyboardTrapLinks[0].focus();
  }

  Array.from(moveFocusLinks).forEach((el) => {
    el.addEventListener('focus', handleFocus);
  });

  Array.from(keyboardTrapLinks).forEach((trapLinkEl) => {
    trapLinkEl.addEventListener('click', () => {
      Array.from(moveFocusLinks).forEach((focusLinkEl) => {
        focusLinkEl.removeEventListener('focus', handleFocus);
      });
    });
  });
});
