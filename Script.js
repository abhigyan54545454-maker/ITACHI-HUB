// ===== TYPING EFFECT =====
const text = "ITACHI HUB ⚡";
let i = 0;

function typing() {
  if(i < text.length){
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 90);
  }
}
typing();

// ===== CLICK SCALE ANIMATION =====
const title = document.getElementById("typing");
title.addEventListener("click", () => {
  title.style.transform = "scale(3)";
  setTimeout(() => {
    title.style.transform = "scale(1)";
  }, 1000);
});

// ===== ITACHI FLASH ON CLICK =====
const flash = document.getElementById('itachi-flash');
title.addEventListener('click', () => {
  flash.classList.add('show');
  setTimeout(() => {
    flash.classList.remove('show');
  }, 1000);
});

// ===== BACKGROUND PARALLAX EFFECT =====
const particles = document.querySelectorAll('.anime-bg span');
document.addEventListener('mousemove', (e)=>{
  particles.forEach((p, i)=>{
    let speed = (i+1) * 0.02;
    p.style.transform = `translate(${(e.clientX*speed)}px, ${(e.clientY*speed)}px)`;
  });
});

// ===== CURSOR NEON TRAIL =====
const trailCount = 10;
const trail = [];

for(let t=0; t<trailCount; t++){
  let div = document.createElement('div');
  div.classList.add('cursor-trail');
  document.body.appendChild(div);
  trail.push(div);
}

document.addEventListener('mousemove', (e)=>{
  trail.forEach((dot, index)=>{
    setTimeout(()=>{
      dot.style.left = (e.clientX + index*2) + 'px';
      dot.style.top = (e.clientY + index*2) + 'px';
    }, index*10);
  });
});

// ===== SCROLL REVEAL ANIMATION =====
const revealElements = document.querySelectorAll('section, .card, .friend');
window.addEventListener('scroll', () => {
  const triggerBottom = window.innerHeight / 5 * 4;
  revealElements.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;
    if(boxTop < triggerBottom){
      el.classList.add('show');
    } else {
      el.classList.remove('show');
    }
  });
});
const logo = document.querySelector('.header .logo');
logo.addEventListener('click', () => {
  const flash = document.getElementById('itachi-flash');
  flash.classList.add('show');
  setTimeout(() => { flash.classList.remove('show'); }, 1000);
});