export function circleAnimation(){
  const text = document.querySelector(".circle-text p");
  const circleText = document.querySelector(".circle-description");
 text.innerHTML = text.innerText.split('').map((char, i) =>
   `<span style="transform:rotate(${i * 14.5}deg")>${char}</span>`).join(" ");
 
 const logo = document.querySelector(".logo");
 const ourMission = document.querySelector(".circle-content");
 logo.addEventListener("mouseenter",()=>{
  ourMission.style.opacity = 1;
  text.setAttribute('aria-hidden', 'false');
  circleText.setAttribute('aria-hidden', 'false');
 })
 logo.addEventListener("mouseleave",()=>{
   ourMission.style.opacity = 0;
   text.setAttribute('aria-hidden', 'true');
   circleText.setAttribute('aria-hidden', 'true');
 })
}