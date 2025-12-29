export function preloaderEffect(){
  window.addEventListener("load",()=>{
    const mainContent = document.querySelectorAll(".main-content");
    mainContent.forEach((content)=>{
      setTimeout(() => {
        content.classList.add("visible-content"); // Fade-in effect
      }, 4200);
    })
    
    function startLoader(){

      let countElement = document.querySelector(".count p");
    let currentValue = 0;
    
      function updateCounter(){
        if (currentValue < 100){
          let increament = Math.floor(Math.random()*10) + 1;
          currentValue = Math.min(currentValue + increament, 100);
          countElement.textContent = currentValue;
    
          let delay = Math.floor(Math.random()*200) + 25;
          setTimeout(updateCounter,delay);
        }
      }
      updateCounter();
  
    }
    startLoader();
   
    gsap.to(".count",{
      opacity:0,
      delay:3.5,
      duration:0.5
    })

    let tl = gsap.timeline();
  
    tl.to(".load-audvis",{
      opacity:1,
      delay:1.5,
      y:20,
      stagger:{amount:0.2},
      ease:"power3.inOut"
    })
 
  tl.to(".load-audvis",{
    opacity:0,
    delay:2,
    y:-20,
    stagger:{amount:0.2},
    ease:"power3.inOut"
  })
  
  gsap.to(".loader-3",{
    scale:0.8,
    duration:0.7,
    delay:2.5,
    ease:"slow(0.9,2,true)"
   
  })
  gsap.to(".loader-3",{
    height:0,
    y:80,
    duration:0.7,
    delay:3.5,
    ease:"back.in(1.4)"
  })
  gsap.to(".loader-4",{
    scale:0.83,
    duration:0.72,
    delay:2.8,
    ease:"slow(0.9,2,true)"
   
  })
  gsap.to(".loader-4",{
    height:0,
    y:90,
    duration:0.7,
    delay:3.8,
    ease:"back.in(1.4)"
  })
  gsap.to(".loader-2",{
    x:1000,
    delay:4.2,
    duration:1.2,
     ease:"power3.inOut"
  })
  gsap.to(".pre-loader",{
    x:-1000,
    delay:4.2,
    duration:1.2,
     ease:"power3.inOut"
  })
  gsap.to(".container-preloader",{
    height:0,
    y:0,
    delay:5
  })
    
  })
}

export function spanLoader(){
    // Select the span element
    const span = document.querySelector('.count span');
    
    // Set a timeout to hide the span after 8 seconds
    setTimeout(() => {
      span.style.display = 'none';
    }, 8000);
}