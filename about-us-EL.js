export function aboutAudvisEL(){
  const aboutUsEL = document.querySelector(".about-audvis");
  aboutUsEL.innerHTML = 
  `
  <div id="cursor" tabindex="0" aria-label="Hover to reveal image">
          <spanaria-label="text inside the circle">OUR</span><span>TEAM</span>
        </div>
        <div class="about-audvis-title">
          <p>Η Εταιρία μας</p>
        </div>
        <div class="about-audvis-description">
          <p>Στην AUDVIS, εξειδικευόμαστε στην παροχή κορυφαίων υπηρεσιών, σχεδιασμένων να ενισχύουν τις επιχειρήσεις με οικονομική διαφάνεια και συμμόρφωση με τους νόμους. Με εμπειρία στον χρηματοοικονομικό έλεγχο, τη διαχείριση κινδύνων και τη φορολογία, η ομάδα μας συνεργάζεται με εταιρείες για να τις βοηθήσει να εξελιχθούν με σιγουριά.</p>
            <div class="audvis-mission"><span ><img  src="assets/AUDVIS_LOGO_ICON_black.png" loading="lazy" alt="Company logo that represent o and u to the word our. For design purpose. " width="24" ></span>AUDVIS</div>
            <p>Αποστολή μας είναι να δυναμώνουμε τις επιχειρήσεις παρέχοντας χρήσιμες χρηματοοικονομικές πληροφορίες. Ξεπερνάμε τα όρια του παραδοσιακού ελέγχου, αναλαμβάνοντας τον ρόλο του αξιόπιστου συμβούλου προσφέροντας εξατομικευμένες λύσεις που ανταποκρίνονται στις μοναδικές ανάγκες κάθε πελάτη.
            </p>
            <p>Δεσμευόμαστε να βοηθήσουμε τις επιχειρήσεις να επιτύχουν, παρέχοντας στρατηγικές συμβουλές, διασφαλίζοντας τη συμμόρφωση με τους κανονισμούς και εντοπίζοντας χρηματοοικονομικούς κινδύνους προτού αυτοί εξελιχθούν σε προβλήματα.</p>
        </div>
        <div class="about-audvis-image" role="img" aria-label="A dynamic visual representation of AUDVIS mission">
         <div class="overlay"></div>
        </div>
        <div class="about-audvis-scrollable" aria-labelledby="cursor"></div>
  `
};