var menu = document.querySelector('.menu');
var mobileHeader = document.querySelector('.mobile-header')
var webTitle = document.querySelector('.web_name');
var navigatorContainer = document.querySelector('.navigator-container');
var mobileListLink = document.querySelectorAll('.mobile-list_link');

mobileListLink.forEach(function (links) {

   function removeClasses() {
      mobileHeader.classList.remove('new-height');
      navigatorContainer.classList.remove('display');
   }
   links.addEventListener('click', removeClasses)
})

function addClasses() {
   mobileHeader.classList.toggle('new-height');
   navigatorContainer.classList.toggle('display');
}


menu.addEventListener('click', addClasses);

//////scroll events
const body = document.querySelector('.Container');
window.addEventListener('scroll', function (e) {

   const scrolling = e.currentTarget.scrollY
   const header = document.querySelector('.header_container')
   if (scrolling => 100) {
      header.classList.add('header_container-background')
   }
   if (scrolling === 0) {
      header.classList.remove('header_container-background')
   }
})