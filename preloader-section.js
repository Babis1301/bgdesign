export function preloaderSection(){
  const preloaderContainer = document.querySelector(".container-preloader");
  preloaderContainer.innerHTML = 
  `
 <div class="pre-loader">
    </div>
    <div class="loader-content">
<div class="copy"><p class="load-audvis">a</p>
  <p class="load-audvis">u</p>
  <p class="load-audvis">d</p>
  <p class="load-audvis">v</p>
  <p class="load-audvis">i</p>
  <p class="load-audvis">s</p></div>
    </div>
    <div class="loader-2">
      <div class="count"><p>0</p><span>%</span></div>
    </div>
    <div class="loader-3"></div>
    <div class="loader-4"></div> 
  `
};