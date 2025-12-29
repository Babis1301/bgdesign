import { preloaderSection } from "./preloader-section.js";
import { preloaderEffect } from "./preloader.js";
import { headerMenuEL, globalEffect } from "./header-EL.js";
import { scrollMenu } from "./scroll-menu.js";
import { videoContainerEL } from "./video-EL.js";
import { circleAnimation } from "./circle-animation.js";
import { menuAnimation } from "./menu-animation.js";
import { hoverHerosectionEL } from "./hero-title-hover-EL.js";
import { servicesTitlesEL, servicesEffectEL } from "./services-items-EL.js";
import { footerFunctionEL } from "./footer-EL.js";
import { aboutAudvisEL } from "./about-us-EL.js";
import { cursorHoverImageEL } from "./cursor-image-EL.js";
import { ourValuessectionEL } from "./our-values-EL.js";
import { characters, generateRandomText } from "./rundom-numbers.js";
import { partners, partnersEffect } from "./partners.js";

// preloader section
preloaderSection();
// preloader event
preloaderEffect();
// header 
headerMenuEL();
globalEffect();
// circle animation
circleAnimation();
// scroll menu
scrollMenu();
// video container
videoContainerEL();
// mneou
menuAnimation();
 hoverHerosectionEL();
//  services
servicesTitlesEL;
servicesEffectEL();
// footer
footerFunctionEL();
// about us
aboutAudvisEL();
// cursor effect
cursorHoverImageEL();
// our vlaues
ourValuessectionEL();
// random numbers effect
characters;
generateRandomText();
const textReveal = document.querySelectorAll('.random-text');
textReveal.forEach((reveal)=>{
  // Ανάθεση τυχαίου κειμένου
  reveal.textContent = generateRandomText(80);

// Λειτουργία εμφάνισης κειμένου με βάση το scroll
function updateTextReveal() {
  const container = reveal.closest('.advisory-audit'); // Βρίσκουμε το parent div
  const rect = container.getBoundingClientRect(); // Λαμβάνουμε τις συντεταγμένες του
  const windowHeight = window.innerHeight; // Ύψος του παραθύρου

  // Υπολογίζουμε πόσο έχει σκρολάρει ο χρήστης μέσα στο container
  const progress = Math.min(Math.max((windowHeight - rect.top) / rect.height, 0), 1);

  // Ενημερώνουμε το `mask-image` για να εμφανίζεται το κείμενο
  reveal.style.maskImage = `linear-gradient(to right, black ${progress * 100}%, transparent 0%)`;
}

// Προσθήκη event listener στο scroll
window.addEventListener('scroll', updateTextReveal);

// Αρχική ενημέρωση
updateTextReveal();
 
});
//  dragging the section of partners
partners;
partnersEffect();