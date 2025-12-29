
export function headerMenu2EL(){
  const header = document.querySelector(".header2");
header.innerHTML = ` <!-- the code for navbar -->
<nav class="navbar navbar-default">
  <!-- the code for logo -->
  <div class="logo">
    <div class="logo-image">
      <a href="index-el.html" arial-label="navigate to home page"><img src="assets/AUDVIS_LOGO_ICON_black.png" loading="lazy" width="30px" height="auto" alt="Company logo"></a>
    </div>
    <div class="logo-name">
      <p id="logo-title" style="color:black;" aria-label="My Website - Advisory Accounting Audit">audvis</p>
          </div>
          <div class="circle-content">
          <div class="logo-circle">
            <div class="circle-text">
              <p style="color:black;" aria-hidden="true" role="region" aria-label="Company Mission"> O u r - M  i s s i o n -</p>
            </div>
          </div>
          <div class="circle-description" ><p style="color:black;" aria-hidden="true" role="region" aria-label="Company Mission">Our goal is to be trusted advisors who provide solutions tailored to the needs of each client.</p></div>
        </div>
  </div>
    <!-- the code for menu, menu icon, language -->
    <div class="menu-languages" aria-label="Language selection">
      <div class="languages" aria-hidden="true">
        <a href="index.html" lang="en" aria-label="Switch to English"><img src="assets/united-kingdom.png" alt="flag of united kingdom" width="24" height="24"></a>
        <a href="index-el.html" lang="el" aria-label="Switch to Greek"><img src="assets/greek flag.png" alt="flag of greece" width="24" height="24"></a>
      </div>
       <div style="color:black;" class="languages-icon" role="open languages menu"><i class="ri-global-line"></i></div>
        <button class="back-btn" onclick="history.back()" aria-label="Go back to the previous page">BACK</button>
      </div>
     
      </div>
      
</nav>
`;
}

export function globalEffect(){
  const globalicon = document.querySelector(".languages-icon");
  const languagesContainer = document.querySelector(".languages");
  
  globalicon.addEventListener("click",()=>{
    if(!languagesContainer.classList.contains("languages-visible")){
      languagesContainer.classList.add("languages-visible");
    }else{
      languagesContainer.classList.remove("languages-visible");
    }
  })
  }


