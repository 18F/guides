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

  const h3s = document.querySelectorAll('h3');
  if (h3s.length <= 1) {
    return;
  }

  const scrollPos = document.documentElement.scrollTop;
  let topHead = h3s[0];
  let i = 0;
  let found = false;
  while (!found && i < h3s.length) {
    if (scrollPos < h3s[i].offsetTop) {
      found = true;
    } else {
      topHead = h3s[i];
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
    && document.querySelectorAll('h3').length > 1
) {
  window.addEventListener('scroll', setCurrentLink);
}
