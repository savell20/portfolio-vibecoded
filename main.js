// Custom cursor
const cursor = document.getElementById('cursor');
const follower = document.getElementById('cursor-follower');

let mouseX = 0, mouseY = 0;
let followerX = 0, followerY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  cursor.style.left = mouseX + 'px';
  cursor.style.top = mouseY + 'px';
});

function animateFollower() {
  followerX += (mouseX - followerX) * 0.1;
  followerY += (mouseY - followerY) * 0.1;
  follower.style.left = followerX + 'px';
  follower.style.top = followerY + 'px';
  requestAnimationFrame(animateFollower);
}
animateFollower();

// Expand cursor on hoverable elements
document.querySelectorAll('a, button').forEach(el => {
  el.addEventListener('mouseenter', () => {
    follower.style.width = '60px';
    follower.style.height = '60px';
    follower.style.opacity = '0.25';
  });
  el.addEventListener('mouseleave', () => {
    follower.style.width = '36px';
    follower.style.height = '36px';
    follower.style.opacity = '0.5';
  });
});

// Animate hero title lines in
window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.hero-title .line').forEach((line, i) => {
    const delay = parseInt(line.dataset.delay) || 0;
    const inner = line.innerHTML;
    line.innerHTML = `<span>${inner}</span>`;
    setTimeout(() => {
      line.querySelector('span').style.transition = 'opacity 0.7s ease, transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)';
      line.querySelector('span').style.opacity = '1';
      line.querySelector('span').style.transform = 'translateY(0)';
    }, 300 + delay);
  });
});
