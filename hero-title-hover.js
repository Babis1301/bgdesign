export const descriptions = [
  "Welcome to AUDVIS, your trusted partner in advisory and accounting audit services. With a focus on precision and integrity, we provide businesses with tailored financial solutions that ensure compliance and drive success. Whether you're a startup or an established enterprise, AUDVIS delivers excellence in every audit",
  "At AUDVIS, we specialize in delivering comprehensive financial audits and advisory services. Our team of experienced professionals ensures accurate reporting, risk management, and actionable insights for sustainable growth. Trust AUDVIS for expertise that makes a difference.",
  "Why choose AUDVIS? Because we combine cutting-edge technology with personalized service to meet the unique needs of your business. From compliance to strategic financial planning, AUDVIS is dedicated to helping you achieve your goals with confidence and clarity.",
  "Partner with AUDVIS today to secure your financial future. Our advisory and audit services are designed to empower businesses with transparency and trust. Contact us now to discover how AUDVIS can optimize your financial operations."
];



 export function hoverHerosection(){

  const hoverDiv = document.querySelector('.hero-content');
  const descriptionDiv = document.querySelector('#hero-description');
  const descriptionBtn = document.querySelector(".hero-description button");

  setTimeout(() => {


  let currentIndex = 0; // Ξεκινάμε από το πρώτο index

  // Εμφάνισε το πρώτο περιεχόμενο στην αρχή
  descriptionDiv.textContent = descriptions[currentIndex];
  descriptionDiv.style.opacity = 1;

  hoverDiv.addEventListener('mouseenter', () => {
    // Υπολογισμός επόμενου index
    currentIndex = (currentIndex + 1) % descriptions.length;

    // Ενημέρωση περιγραφής
    descriptionDiv.textContent = descriptions[currentIndex];
    descriptionDiv.style.opacity = 1; // Εμφάνιση περιγραφής

    // Εμφάνιση ή απόκρυψη του κουμπιού ανάλογα με το index
    if (currentIndex === 3) {
      descriptionBtn.style.opacity = 1;
      descriptionBtn.style.visibility = 'visible';
    } else {
      descriptionBtn.style.opacity = 0;
      descriptionBtn.style.visibility = 'hidden';
    }
  });

  hoverDiv.addEventListener('mouseleave', () => {
    // Διατήρηση της τρέχουσας περιγραφής χωρίς αλλαγή
    descriptionDiv.style.opacity = 1; // Περιγραφή παραμένει εμφανής
    descriptionBtn.style.opacity = 1;
  });
  }, 8000);



};


