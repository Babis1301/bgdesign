
export function headerMenu(){
  const header = document.querySelector(".header");
header.innerHTML = ` <!-- the code for navbar -->
<nav class="navbar navbar-default">
  <!-- the code for logo -->
  <div class="logo">
    <div class="logo-image">
      <a href="index.html" arial-label="Home"><img src="assets/AUDVIS_LOGO_WHITE.png" loading="lazy" width="30" height="42" alt="Company logo">
      
      </a>
    </div>
    <div class="logo-name">
      <p id="logo-title" aria-label="My Website - Advisory Accounting Audit" aria-hidden="false">audvis</p>
          </div>
          <div class="circle-content">
          <div class="logo-circle">
            <div class="circle-text">
              <p aria-hidden="true" role="region" aria-label="Company Mission"> O u r - M  i s s i o n -</p>
            </div>
          </div>
          <div class="circle-description" style="color:white;" aria-hidden="true" role="region" aria-label="Company Mission">to be trusted advisors who provide solutions tailored to the needs of each client.</div>
        </div>
  </div>
    <!-- the code for menu, menu icon, language -->
    <div class="menu-languages" aria-label="Language selection">
      <div class="languages" aria-hidden="true">
        <a href="index.html" lang="en" aria-label="Switch to English"><img src="assets/united-kingdom.png" alt="flag of united kingdom" width="24" height="24"></a>
        <a href="index-el.html" lang="el" aria-label="Switch to Greek"><img src="assets/greek flag.png" alt="flag of greece" width="24" height="24"></a>
      </div>
       <div class="languages-icon" role="open languages menu"><i class="ri-global-line"></i></div>
       <div class="menu-icon" role="Open menu">
        <i class="ri-menu-4-fill" aria-hidden="true"></i>
       </div>
      </div>
      
              </div> 
      </nav>
      <div id="full" aria-labelledby="menu-button" hidden>
        <ul class="menu-list" role="menu">
                <li role="menuitem"><a href='#services' id="menu-item" ><span>Our</span> Services</a></li>
                <li role="menuitem"><a href='#aboutus' id="menu-item" >About <span>Us</span></a></li>
                <li role="menuitem"><a href='#ourvalues' id="menu-item" >Our <span>Values</span></a></li>
                <li role="menuitem"><a href='#Our Partners' id="menu-item" ><span>Our</span> Partners</a></li>
                <li role="menuitem"><a href='#letstalk' id="menu-item" >Let's <span>Talk!</span></a></li>
                 
                </ul>
                
                <ul role="menu" aria-label="Contact Numbers" class="phones">
                <li ><a href="tel:+302108982853" style=" font-family:'Montserrat';font-size: 16px;text-wrap:nowrap;line-height:normal;" aria-label="Call us at +30 2108982855">Tel: +30 2108982855</a></li>
                <li ><a href="tel:+306974396555" style="  font-family:'Montserrat';font-size: 16px;text-wrap:nowrap;line-height:normal;" aria-label="Call us at +30 6974396555">Mobile: +30 6974396555</a></li>
                </ul>
                  
                <div role="Close menu">
                <i class="ri-close-large-line" 
          ></i>
              </div>
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