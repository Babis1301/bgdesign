export function videoContainer(){

  const heroSection = document.querySelector(".hero-section");

  heroSection.innerHTML = `
  <div role="button" class="audio-button" aria-label="on click playing the audio" style="display:none;">
  <div class="audio-button1"></div>
  <div class="audio-button2"></div>
  <div class="audio-button3"></div>
  </div>
  <div class="darker-background" aria-label="makes the video darker for better contrast"></div>
  <audio id="myAudio" style="width:0; height:0;">
    <source src="video/audio.mp3" type="audio/mpeg">
  </audio>
  <video id="logoid"
    autoplay 
    muted 
    loop 
    aria-hidden="true" >
        <source src="video/AUDVIS_4.mp4" type="video/mp4">
      </video>
      <div class="hero-content">
        <div class="hero-title">
        <h1 aria-label="Company name became from: Advisory Accounting Audit">ADVISORY ACCOUNTING AUDIT</h1>
        <h2 aria-label="Company address: Orlof 8, 166 75 Glyfada, Athens">Orlof 8, 166 75 Glyfada, Athens</h2>
        </div>
        <div class="hero-description" tabindex="0" 
  aria-live="polite" 
  aria-atomic="true" 
  aria-label="Description of our company"><ul id="hero-description"><li role="descriptionitem" hidden></li></ul>
  <button type="button" aria-label="Contact us , email:info@audvis.gr" onclick="window.location.href='#letstalk'">CONTACT US</button></div>
  `;
}
export function audioPlay(){
const audioBtn = document.querySelector(".audio-button");
const audio = document.querySelector("#myAudio");
const audioBtn1 = document.querySelector(".audio-button1")
const audioBtn2 = document.querySelector(".audio-button2")

let isPlaying = false;

    // Add a click event listener
    audioBtn.addEventListener("click", function() {
      if (!isPlaying) {
        audioBtn1.style.opacity = 0;
        audioBtn2.style.opacity = 0;

        audio.play();  // Play audio
        isPlaying = true;    // Update state
      } else {
        audioBtn1.style.opacity = 1;
        audioBtn2.style.opacity = 1;
        audio.pause(); // Pause audio
        isPlaying = false;   // Update state
      }
    })
  };