export function cursorHoverImage(){
  let main = document.querySelector(".about-audvis");
let cursor = document.querySelector("#cursor");
main.addEventListener("mousemove",function(dets){
  gsap.to(cursor,{
x:dets.x,
y:dets.y,
duration:0.2
  })
})
const cursorImage = document.querySelector(".about-audvis-image");
cursorImage.addEventListener("mouseenter",function(){
  cursor.innerHTML = "OUR TEAM";
  gsap.to(cursor,{
    opacity:1,
  })
  })
  cursorImage.addEventListener("mouseleave",function(){
      gsap.to(cursor,{
      opacity:0,
    })
    });
}