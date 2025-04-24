gsap.from(".stats", {
  opacity: 0,
  y: 50,
  duration: 1.5,
  delay: 0.3,
  stagger: 0.3
});

function countUp(element, start, end, duration) {
  let current = start;
  let range = end - start;
  let stepTime = Math.abs(Math.floor(duration / range));
  let obj = document.getElementById(element);

  let counter = setInterval(function () {
    current++;
    obj.innerHTML = current;
    if (current == end) {
      clearInterval(counter);
    }
  }, stepTime);
}

countUp('clients-count', 0, 350, 3000);
countUp('projects-count', 0, 120, 3000);
countUp('experience-years', 0, 20, 3000);
