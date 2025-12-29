export const descriptionsEL = [
  "Καλωσορίσατε στην AUDVIS, τον αξιόπιστο συνεργάτη σας σε συμβουλευτικές και λογιστικές υπηρεσίες. Με έμφαση στην ακρίβεια και την ακεραιότητα, παρέχουμε στις επιχειρήσεις εξατομικευμένες χρηματοοικονομικές λύσεις που εξασφαλίζουν την επιτυχία.",
  "Στην AUDVIS, εξειδικευόμαστε στην παροχή ολοκληρωμένων χρηματοοικονομικών ελέγχων και συμβουλευτικών υπηρεσιών. Η ομάδα μας, αποτελούμενη από έμπειρους επαγγελματίες, διασφαλίζει ακριβή αναφορά, διαχείριση κινδύνων και εφαρμόσιμες προτάσεις για βιώσιμη ανάπτυξη.",
  "Γιατί να επιλέξετε την AUDVIS; Γιατί συνδυάζουμε την πιο σύγχρονη τεχνολογία με εξατομικευμένη εξυπηρέτηση, ώστε να καλύψουμε τις μοναδικές ανάγκες της επιχείρησής σας. Από τη συμμόρφωση έως τον στρατηγικό χρηματοοικονομικό σχεδιασμό, η AUDVIS είναι αφοσιωμένη στο να σας βοηθήσει να πετύχετε τους στόχους σας με σιγουριά και διαφάνεια.",
  "Mε την AUDVIS σήμερα εξασφαλίζετε το οικονομικό σας μέλλον. Οι συμβουλευτικές και ελεγκτικές μας υπηρεσίες είναι σχεδιασμένες για να δυναμώνουν τις επιχειρήσεις με διαφάνεια και εμπιστοσύνη. Επικοινωνήστε μαζί μας για να ανακαλύψετε πώς η AUDVIS μπορεί να βελτιώσει τις οικονομικές σας λειτουργίες."
];



 export function hoverHerosectionEL(){

 const hoverDiv = document.querySelector('.hero-content');
   const descriptionDiv = document.querySelector('#hero-description');
   const descriptionBtn = document.querySelector(".hero-description button");
 
   setTimeout(() => {
 
 
   let currentIndex = 0; // Ξεκινάμε από το πρώτο index
 
   // Εμφάνισε το πρώτο περιεχόμενο στην αρχή
   descriptionDiv.textContent = descriptionsEL[currentIndex];
   descriptionDiv.style.opacity = 1;
 
   hoverDiv.addEventListener('mouseenter', () => {
     // Υπολογισμός επόμενου index
     currentIndex = (currentIndex + 1) % descriptionsEL.length;
 
     // Ενημέρωση περιγραφής
     descriptionDiv.textContent = descriptionsEL[currentIndex];
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


