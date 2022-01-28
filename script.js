let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById('navigation').style.top = '0';
  } else {
    document.getElementById('navigation').style.top = '-75px';
  }
  prevScrollpos = currentScrollPos;
};
