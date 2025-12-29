export function menuAnimation(){
  const menu = document.querySelector(".menu-icon i");
  const cross = document.querySelector("#full i")
  const open = document.querySelector("#full")
  let tl =gsap.timeline()
  
  tl.to(open,{
    right:0,
    opacity: 1,
    duration:0.48,
    // stagger:0.15
  })
  
  tl.from("#full li",{
    x:150,
    duration:0.39,
    stagger:{amount:0.52},
    opacity:0
  
  })
  tl.from(cross,{
    opacity:0
  })
  
  
  tl.pause()
  

 
  menu.addEventListener("click", function(){
    tl.play()
    document.documentElement.style.overflowY = 'hidden';    
  })
  
  cross.addEventListener("click", function(){
    tl.reverse()
    document.documentElement.style.overflowY = 'auto';   
  })
  
  const menuItems = document.querySelectorAll("#menu-item");
  menuItems.forEach((item)=>{
    item.addEventListener("click",()=>{
      tl.reverse()
      document.documentElement.style.overflowY = 'auto';   
    })
  })
 
}