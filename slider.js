var imgIndex = 1;
showImg(imgIndex);

function changeIndex(n) {
    showImg(imgIndex += n);
  }
  
  function showImg(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length-1) {imgIndex = 1}
    if (n < 1) {imgIndex = x.length}
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    x[imgIndex-1].style.display = "block";  
  }