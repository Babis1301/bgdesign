export function aboutAudvis(){
  const aboutUs = document.querySelector(".about-audvis");
  aboutUs.innerHTML = 
  `
  <div id="cursor" tabindex="0" aria-label="Hover to reveal image">
          <spanaria-label="text inside the circle">OUR</span><span>TEAM</span>
        </div>
        <div class="about-audvis-title">
          <p>About</p>
          <p>AUDVIS</p>
        </div>
        <div class="about-audvis-description">
          <p>At AUDVIS, we specialize in delivering premium advisory, accounting, and audit services designed to empower businesses with financial clarity, regulatory compliance, and strategic growth opportunities. With extensive experience in financial auditing, risk management, and tax advisory, our expert team partners with companies to confidently navigate the ever-evolving financial landscape.</p>
            <div class="audvis-mission"><span ><img  src="assets/AUDVIS_LOGO_ICON_black.png" loading="lazy" alt="Company logo that represent o and u to the word our. For design purpose. " width="25"></span>R MISSION</div>
            <p>Our mission at AUDVIS is to empower businesses with actionable financial insights and essential tools to make informed decisions with confidence. We go beyond traditional auditing by becoming trusted advisors, delivering customized financial solutions tailored to meet each client’s unique needs. 
            </p>
            <p>We are committed to helping businesses achieve long-term success by offering strategic advice, ensuring regulatory compliance, and identifying financial risks before they become challenges.</p>
        </div>
        <div class="about-audvis-image" role="img" aria-label="A dynamic visual representation of AUDVIS mission">
         <div class="overlay"></div>
        </div>
        <div class="about-audvis-scrollable" aria-labelledby="cursor"></div>
  `
};