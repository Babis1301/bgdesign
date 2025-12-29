export function cursorHoverImageEL(){
  let mainEL = document.querySelector(".about-audvis");
let cursorEL = document.querySelector("#cursor");
mainEL.addEventListener("mousemove",function(dets){
  gsap.to(cursorEL,{
x:dets.x,
y:dets.y,
duration:0.2
  })
})
const cursorImageEL = document.querySelector(".about-audvis-image");
cursorImageEL.addEventListener("mouseenter",function(){
  cursorEL.innerHTML = "Η ομάδα μας";
  gsap.to(cursor,{
    opacity:1,
  })
  })
  cursorImageEL.addEventListener("mouseleave",function(){
      gsap.to(cursorEL,{
      opacity:0,
    })
    });
}