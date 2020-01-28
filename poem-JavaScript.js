const carouselSlide = document.querySelector('.coursel-slide');
const images = document.querySelectorAll('.coursel-slide img');
const nextBtn = document.querySelector('#nextBtn');
const prevBtn = document.querySelector('#prevBtn');

let counter = 1;
const size = images[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

nextBtn.addEventListener('click', () => {
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
})

prevBtn.addEventListener('click', () => {
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
})

carouselSlide.addEventListener('transitionend', () => {
    console.log(images[counter])
    if (images[counter].id === 'lastClone') {
        carouselSlide.style.transition = "none";
        counter = images.length - 2;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }

    if (images[counter].id === 'firstClone') {
        carouselSlide.style.transition = "none";
        counter = images.length - counter;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
})

////////////// javaScript for cards

const buttons = document.querySelectorAll('.read-more_btn')
const backdrop = document.querySelector('.back-drop');
const backdropImageCard = document.querySelector('.back-drop-image-card')
const CardpoemHeader = document.querySelector('.back-drop-title');
const backDropPoem = document.querySelector('.back-drop-poem');
const closeBtn = document.querySelector('.closeBtn');


function handleCardEvent(event) {
    const button = event.currentTarget;
    const card = button.closest('.card');
    const imgSrc = card.querySelector('img').src;
    const poemTitle = card.querySelector('.title').textContent
  //  const poem = card.querySelector('.poem').textContent

  //const poemVisibility = card.querySelector('.more-content');

    //poemVisibility.classList.remove('more-content')
  



    const poems = card.querySelector('.poem')

 backDropPoem.innerHTML = `${poems.innerHTML}`

    CardpoemHeader.textContent = `${poemTitle}`
   // backDropPoem.textContent = `${poem}`
    backdropImageCard.innerHTML = `<img class="sun-set" src="${imgSrc}" alt="Sun Set"> `
    //backdrop.style. visibility = 'visible'
    backdrop.classList.add('open')
}

buttons.forEach(button => {
    button.addEventListener('click', handleCardEvent)

})

closeBtn.addEventListener('click',(event) => { 
    backdrop.classList.remove('open')
})
