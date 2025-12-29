export function videoContainerEL(){

  const heroSectionEL = document.querySelector(".hero-section-EL");

  heroSectionEL.innerHTML = `
  <div class="darker-background" aria-label="makes the video darker for better contrast"></div>
  <video id="logo-id"
    autoplay 
    muted 
    loop 
    aria-hidden="true" >
        <source src="video/AUDVIS_4.mp4" type="video/mp4">
      </video>
      <div class="hero-content" >
        <div class="hero-title">
        <h1 aria-label="Company name became from: Advisory Accounting Audit">ΛΟΓΙΣΤΙΚΟΙ ΦΟΡΟΤΕΧΝΙΚΟΙ ΕΛΕΓΧΟΙ</h1>
        <h2 aria-label="Διεύθυνση Εταιρίας: Oρλώφ 8, 166 75 Γλυφάδα, Αθήνα">Ορλώφ 8, 16675 Γλυφάδα, Αθήνα</h2>
        </div>
        <div class="hero-description" tabindex="0" 
  aria-live="polite" 
  aria-atomic="true" 
  aria-label="Description of our company"><ul id="hero-description"><li role="descriptionitem" hidden></li></ul>
  <button type="button" aria-label="Contact us , email:info@audvis.gr" onclick="window.location.href='#letstalk'">Επικοινώνησε μαζί μας!</button></div>
  </div>
  `;
}