//Define element parameters
var homeImg = document.getElementById('homeImg');
var homeArticle = document.getElementById('homeArticle');
var aboutImg = document.getElementById('aboutImg');
var aboutArticle = document.getElementById('aboutArticle');
var featuresArticle = document.getElementById('featuresArticle');
var centerImg = document.getElementById('center-img');
var featuresHeading = document.getElementById('features-heading');
var icons = document.getElementsByClassName('icons');
var mainMenu = document.getElementById('main-menu');
var clientsArticle = document.getElementsByClassName('clientsArticle');
var sliderButtons = document.getElementsByClassName('sliderButtons');
var contactForm = document.getElementById('section-contact');

//creating animation on page load
function startAnimation(){
  if(homeArticle.getBoundingClientRect().top < window.innerHeight){
    homeImg.classList.add('slide-fade-in-rightSide');
    homeArticle.classList.add('slide-fade-in-leftSide');
  }
  if(aboutArticle.getBoundingClientRect().top < window.innerHeight){
    aboutImg.classList.add('slide-fade-in-leftSide');
    aboutArticle.classList.add('slide-fade-in-rightSide');
  }
  if(featuresArticle.getBoundingClientRect().top < window.innerHeight){
    featuresArticle.classList.add('slide-fade-in-rightSide');
    centerImg.classList.add('slide-fade-in-leftSide');
  }
  if(featuresHeading.getBoundingClientRect().top < window.innerHeight){
    for(i=0;i<icons.length;i++){
      icons[i].classList.add('slideUp');
    }
  }
  if(contactForm.getBoundingClientRect().top < window.innerHeight){
    contactForm.classList.add('slideUp');
  }
}
//start animation on window load and scroll
window.addEventListener('load',startAnimation);
window.addEventListener('scroll',startAnimation);

 


// Switching slider buttons
function revealArticleOne(){
  
  if(clientsArticle[0].style.display = 'none'){
    clientsArticle[1].style.display = 'none';
    clientsArticle[2].style.display = 'none';
    clientsArticle[0].style.display = 'block';
    clientsArticle[0].classList.add('slide-fade-in-leftSide');
    sliderButtons[0].style.backgroundColor = '#F33030';
    sliderButtons[1].style.backgroundColor = '#F59393';
    sliderButtons[2].style.backgroundColor = '#F59393';
  }
}
function revealArticleTwo() {
  clientsArticle[0].style.display = 'none';
  clientsArticle[2].style.display = 'none';
  clientsArticle[1].classList.add('slide-fade-in-rightSide');
  clientsArticle[1].style.display = 'block';
  sliderButtons[0].style.backgroundColor = '#F59393';
  sliderButtons[1].style.backgroundColor = '#F33030';
  sliderButtons[2].style.backgroundColor = '#F59393';
}
function revealArticleThree(){
  if(clientsArticle[2].style.display = 'none'){
    clientsArticle[0].style.display = 'none';
    clientsArticle[1].style.display = 'none';
    clientsArticle[2].classList.add('slide-fade-in-rightSide');
    clientsArticle[2].style.display = 'block';
    sliderButtons[0].style.backgroundColor = '#F59393';
    sliderButtons[1].style.backgroundColor = '#F59393';
    sliderButtons[2].style.backgroundColor = '#F33030';
  }
}


// menu bg-color changing
onscroll = function (){
  mainMenu.style.backgroundColor = 'black';
  if(window.scrollY == 0){
    mainMenu.style.backgroundColor = 'transparent';
  }
}

//go to page head
function goUp(){
  window.scrollTo(0,0);
}



