var myIndex = 0
var slideIndex = 1;
showDivs(slideIndex);

autoSlide();

function autoSlide(){
	
	var i
	var x = document.getElementsByClassName("mySlides");
	
	for (i = 0; i < x.length; i++){
		x[i].style.display = "none";
	}
	
	myIndex++;
	
	if(myIndex > x.length){myIndex = 1}/* Adds a reset to the automatic fn*/
	
	x[myIndex-1].style.display = "block";
	
	setTimeout(autoSlide,2000)	
}

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}