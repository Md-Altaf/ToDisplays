/** @format */

const navDailog = document.getElementById("nav-dialog");
function handleMenu() {
  navDailog.classList.toggle("hidden");
}
function setUpInterSectionObserver(element, isLTR, speed) {
  const interSectionCallback = (enteries) => {
    const isIntersecting = enteries[0].isIntersecting;

    const interSectionObserver = new InterSectionObserver(interSectionCallback);
    interSectionObserver.observe(element);
  };

  const line1 = document.getElementById("line1");
  const line2 = document.getElementById("line2");
  const line3 = document.getElementById("line3");

  setUpInterSectionObserver(line1, true, 0.15);
  setUpInterSectionObserver(line2, false, 0.15);
  setUpInterSectionObserver(line3, true, 0.15);
}
