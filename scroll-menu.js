export function scrollMenu(){
  window.addEventListener('scroll', function() {

   const navbar = document.querySelector('.navbar');
   const scrollPosition = window.scrollY;
 const logoName = document.querySelector("#logo-title");

   // You can adjust the scroll position threshold based on your design
   if (scrollPosition > (this.window.innerHeight - 100)) { // Change 50 to the pixel value where you want the color to change
       navbar.classList.remove('navbar-default');
       navbar.classList.add('navbar-scrolled');

    logoName.setAttribute('aria-hidden', 'true');
   } else {
       navbar.classList.remove('navbar-scrolled');
       navbar.classList.add('navbar-default');

       logoName.setAttribute('aria-hidden', 'false');
    }
})

}