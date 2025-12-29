// the english website
import { preloaderSection } from "./preloader-section.js";
import { preloaderEffect , spanLoader } from "./preloader.js";
import { videoContainer, audioPlay } from "./video.js";
import { headerMenu, globalEffect } from "./header.js";
import { scrollMenu } from "./scroll-menu.js";
import { aboutAudvis } from "./about-us.js";
import { hoverHerosection } from "./hero-title-hover.js";
import { footerFunction } from "./footer.js";
import { circleAnimation } from "./circle-animation.js";
import { menuAnimation } from "./menu-animation.js";
import { servicesEffect, servicesTitles } from "./services-items.js";
import { ourValuessection } from "./our-values.js";
import { partnersEffect, partners } from "./partners.js";
import { cursorHoverImage } from "./cursor-image.js";
import { characters, generateRandomText } from "./rundom-numbers.js";


// ******************** the english website**************************
// preloader section
preloaderSection();
// preloader event
preloaderEffect();
spanLoader();
// import header with js
headerMenu();
globalEffect();
// navbar effect on scrolling
scrollMenu();
// calling the video function
videoContainer();
audioPlay();
hoverHerosection(); 
// circle animation in logo
circleAnimation();

//  menu window event
menuAnimation();
// section 1 , add event listener on hover effect
servicesTitles;
servicesEffect();
// about us section
aboutAudvis();
// our values section
ourValuessection();
// effect for the cursor when hoverin over the about audvis image
cursorHoverImage();
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
partnersEffect()

// footer
footerFunction();



