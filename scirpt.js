

const nameTyping = document.getElementById("nameTyping");

const name = "MEGHA SAXENA";

let i = 0;
let deleting = false;

function nameAnimation() {

    if (!deleting) {
        nameTyping.textContent = name.substring(0, i + 1);
        i++;

        if (i === name.length) {
            deleting = true;
            setTimeout(nameAnimation, 1500);
            return;
        }

    } else {
        nameTyping.textContent = name.substring(0, i - 1);
        i--;

        if (i === 0) {
            deleting = false;
            setTimeout(nameAnimation, 500);
            return;
        }
    }

    setTimeout(nameAnimation, deleting ? 80 : 150);
}

nameAnimation();

nameEffect();
:const roles = [
  "Frontend Developer",
  "Web Developer",
  "UI Developer",
  "React JS Developer"
];

const typingElement = document.getElementById("typing");

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
  const currentRole = roles[roleIndex];

  if (!deleting) {
    typingElement.textContent =
      currentRole.slice(0, charIndex + 1);

    charIndex++;

    if (charIndex === currentRole.length) {
      deleting = true;
      setTimeout(typeEffect, 1800);
      return;
    }
  } else {
    typingElement.textContent =
      currentRole.slice(0, charIndex - 1);

    charIndex--;

    if (charIndex === 0) {
      deleting = false;
      roleIndex++;

      if (roleIndex === roles.length) {
        roleIndex = 0;
      }
    }
  }

  setTimeout(typeEffect, deleting ? 70 : 120);
}

typeEffect();