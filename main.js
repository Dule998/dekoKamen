function myFunction() {
  let element = document.getElementById("gallery-preview");
  element.classList.remove("visible");
  let element1=document.getElementById("navbar");
  element1.classList.remove("topPozicija");
}

function init(){
	bindGalleryItems();
    bindKeydown();
}

function bindGalleryItems(){
	let images=document.querySelectorAll('.poz a');

	for(let image of images){
		image.addEventListener('click',showImage);
	}
}

function showImage(event){
	event.preventDefault();
	let link=event.target.parentElement.href;

	let image=document.querySelector("#gallery-preview img");

	image.src=link;

	let element = document.getElementById("gallery-preview");
  element.classList.add("visible");

  let element1=document.getElementById("navbar");
   element1.classList.add("topPozicija");
}
function bindKeydown(){
	window.addEventListener('keydown',keyDownHandler);
}

function keyDownHandler(event){
	switch(event.key){
		case"Escape":
		myFunction();
		break;
	}
}
window.addEventListener('load',init);







//*galerija

function galerija() {
  let element = document.getElementById("gallery");
  element.classList.remove("visible");
  let element1=document.getElementById("navbarr");
  element1.classList.remove("nevidljiv");
}

function initt(){
	bindGalleryItemss();
	 bindKeydown1();
}

function bindGalleryItemss(){
	let images=document.querySelectorAll('.map a');
    let index=0;
	for(let image of images){
		image.addEventListener('click',showImages);
        image.dataset.index=index;
		index++;
	}
}

function showImages(event){
	event.preventDefault();
	let link=event.target.parentElement.href;
	let index=event.target.parentElement.dataset.index;

	let image=document.querySelector("#gallery img");

	image.src=link;

	let element = document.getElementById("gallery");
	element.dataset.currentIndex=index;
    element.classList.add("visible");

  let element1=document.getElementById("navbarr");
   element1.classList.add("nevidljiv");
}

function bindKeydown1(){
	window.addEventListener('keydown',keyDownHandler1);
}

function keyDownHandler1(event){
	switch(event.key){
		case "Escape":
		galerija();
		break;
		case "ArrowRight":
		showNextImage();
		break;
		case "ArrowLeft":
		showPreviousImage();
		break;

	}
}


function showNextImage(){
	let element = document.getElementById("gallery");
	let currentIndex=element.dataset.currentIndex;

	currentIndex++;
	let images=document.querySelectorAll(".map a");/*dd*/
	currentIndex=currentIndex % images.length;

	let link=images[currentIndex].href;

	let image=element.querySelector("img");

	image.src=link;

	element.dataset.currentIndex=currentIndex;
    element.classList.add("visible");
}


function showPreviousImage(){
	let element = document.getElementById("gallery");
	let currentIndex=element.dataset.currentIndex;
	let images=document.querySelectorAll(".map a");
	currentIndex--;

	if(currentIndex<0){
     currentIndex=images.length-1;
	}

	let link=images[currentIndex].href;

	let image=element.querySelector("img");

	image.src=link;

	element.dataset.currentIndex=currentIndex;
    element.classList.add("visible");
}
window.addEventListener('load',initt);