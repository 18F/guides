require('@uswds/uswds');

/* eslint no-plusplus: 0 */
/**
 * Find the most recently passed heading and adds a usa-current
 * class to the correspoing link in the sidenav subnav
 */
function setCurrentLink() {
  if (!document.querySelector('.usa-sidenav')) {
    return;
  }
  if (!document.querySelector('.usa-sidenav__sublist')) {
    return;
  }

  /* h2 elements with an ID attribute are expected to be in the subnav */
  const h2s = document.querySelectorAll('h2[id]');
  if (h2s.length <= 1) {
    return;
  }

  const scrollPos = document.documentElement.scrollTop;
  let topHead = h2s[0];
  let i = 0;
  let found = false;
  while (!found && i < h2s.length) {
    if (scrollPos < h2s[i].offsetTop) {
      found = true;
    } else {
      topHead = h2s[i];
    }
    i++;
  }
  const href = topHead.id;
  const oldLink = document.querySelector('.usa-sidenav__sublist .usa-current');
  if (oldLink) {
    oldLink.classList.remove('usa-current');
  }
  const currentLink = document.querySelector(
    `.usa-sidenav__sublist [href='#${href}']`,
  ).parentElement;
  currentLink.classList.add('usa-current');
}

/**
 * Add the event listener to find the nearest heading on user scroll
 */
if (
  document.querySelector('.usa-sidenav')
    && document.querySelectorAll('h2').length > 1
) {
  window.addEventListener('scroll', setCurrentLink);
}
