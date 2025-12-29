export const servicesTitlesEL = [
  {id:1,
    number: '01.',
    title: 'ΟΙΚΟΝΟΜΙΚΟΙ ΕΛΕΓΧΟΙ',
    hover: "services-hover",
    linehover: "line-hover",
    class: "toggle-content",
    description:"Προσφέρουμε ολοκληρωμένες υπηρεσίες οικονομικών ελέγχων για να διασφαλίσουμε τη διαφάνεια των οικονομικών σας δεδομένων. Οι ειδικοί μας πραγματοποιούν λεπτομερείς αξιολογήσεις, βοηθώντας την επιχείρησή σας να διατηρεί την αξιοπιστία της απέναντι στους ενδιαφερόμενους φορείς. Εντοπίζοντας πιθανούς κινδύνους, οι οικονομικοί μας έλεγχοι δεν προστατεύουν μόνο την εταιρεία σας, αλλά παρέχουν χρήσιμα δεδομένα για τη βελτίωση των οικονομικών αποφάσεων."
  },
  {id:2,
    number: '02.',
    title: 'ΕΣΩΤΕΡΙΚΟΙ ΕΛΕΓΧΟΙ',
    hover: "",
    linehover: " ",
    class: " ",
    description:"Οι υπηρεσίες εκτίμησης εσωτερικών ελέγχων μας έχουν σχεδιαστεί για να ενισχύσουν την επιχειρησιακή αποτελεσματικότητα και τη διαχείριση κινδύνων της εταιρείας σας. Αξιολογούμε τις υπάρχουσες διαδικασίες για να εντοπίσουμε αδυναμίες και να εφαρμόσουμε ισχυρά μέτρα ελέγχου που να συμφωνούν με τις απαιτήσεις. Βελτιστοποιώντας τα εσωτερικά συστήματα, σας βοηθάμε να προστατεύσετε τα περιουσιακά σας στοιχεία, να ενισχύσετε την αποδοτικότητα και να δημιουργήσετε μια ισχυρή βάση για βιώσιμη ανάπτυξη."
  },
  {id:3,
    number: '03.',
    title: 'ΣΥΜΒΟΥΛΕΥΤΙΚΗ ΦΟΡΟΛΟΓΙΑ',
    hover: "",
    linehover: " ",
    class: " ",
    description:"Οι υπηρεσίες συμβουλευτικής φορολογίας μας βοηθούν τις επιχειρήσεις να συμμορφώνονται με τους ισχύοντες φορολογικούς κανονισμούς, εξασφαλίζοντας την ακρίβεια στις υποβολές και την ελαχιστοποίηση του κινδύνου προστίμων. Είτε πρόκειται για τη σωστή διαχείριση των φορολογικών υποχρεώσεων, είτε για την επίλυση ζητημάτων συμμόρφωσης, προσαρμόζουμε τις υπηρεσίες μας ώστε να ευθυγραμμίσουμε τις φορολογικές σας υποχρεώσεις με τους επιχειρηματικούς στόχους σας."
  },
  {id:4,
    number: '04.',
    title: 'ΥΠΗΡΕΣΙΕΣ ΣΥΜΒΟΥΛΕΥΤΙΚΗΣ',
    hover: "",
    linehover: " ",
    class: " ",
    description: "Προσφέρουμε υπηρεσίες διαχείρισης κινδύνου και συμβουλευτικής για να βοηθήσουμε τις επιχειρήσεις να προβλέψουν και να μειώσουν τους οικονομικούς κινδύνους. Η ομάδα μας πραγματοποιεί λεπτομερείς εκτιμήσεις κινδύνου, αναπτύσσει προσαρμοσμένες στρατηγικές και παρέχει πρακτικές συμβουλές για την ενίσχυση της λήψης αποφάσεων. σας βοηθάμε να ενισχύσετε την ανθεκτικότητά σας και να διασφαλίσετε την μακροχρόνια επιτυχία σας."
  }
];

export function servicesEffectEL(){
  
const servicesArray = servicesTitlesEL.map(serviceItem =>
  `
  <div class="div${serviceItem.id}" tabindex="0">
  <div class="services-title ${serviceItem.hover}">
    <h2>${serviceItem.number}</h2>
    <h3>${serviceItem.title}</h3>
<div class="line"></div>
<div class="line-2 ${serviceItem.linehover}"></div>
  </div>
</div>
  <div class="div${(serviceItem.id + 4)} description ${serviceItem.class}" aria-hidden="true">
  <p>
  ${serviceItem.description}
  </p>
  </div>
  `
).join(" ");
const servicesContent = document.querySelector(".services");
servicesContent.innerHTML = servicesArray;

const listBtns = document.getElementsByClassName("services-title");
const listDescription = document.getElementsByClassName("description");	
const lines = document.getElementsByClassName("line-2")

for(let i = 0 ; i < listBtns.length; i++ ){

listBtns[i].addEventListener("mouseover",()=>{
 
  document.querySelector(".toggle-content")?.classList.remove("toggle-content");
  listDescription[i].classList.add("toggle-content");
  listDescription[i].setAttribute('aria-hidden','false');
  document.querySelector(".services-hover")?.classList.remove("services-hover");
  listBtns[i].classList.add("services-hover");
  listBtns[i].setAttribute('aria-expanded','true');
  document.querySelector(".line-hover")?.classList.remove("line-hover");
  lines[i].classList.add("line-hover");
  
});

listBtns[i].addEventListener("mouseleave",()=>{
 
  listDescription[i].setAttribute('aria-hidden','true');
  listBtns[i].setAttribute('aria-expanded','false');
  
});
};
};

