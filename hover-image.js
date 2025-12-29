

export function hoverImage(){
  let main2 = document.querySelector(".partners-section");
let cursor2 = document.querySelector("#cursor2");
main2.addEventListener("mousemove",function(dets2){
  gsap.to(cursor2,{
x:dets2.x,
y:dets2.y,
duration:0.2
  })
})
const cursorImage2 = document.querySelector(".partners");
cursorImage2.addEventListener("mouseenter",function(){
  cursor2.innerHTML = "DRAG ME";
  gsap.to(cursor2,{
    opacity:1,
  })
  })
  cursorImage2.addEventListener("mouseleave",function(){
      gsap.to(cursor2,{
      opacity:0,
    })
    })
}