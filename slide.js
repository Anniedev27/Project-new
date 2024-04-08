    let slideIndex = 0;

      function showSlides() {
      let slides = document.getElementsByClassName("column");
      let dots = document.getElementsByClassName("dot");

      
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
      }

      let startIndex = slideIndex * 2;
      for (let i = startIndex; i < startIndex + 2; i++) {
        if (i < slides.length) {
          slides[i].style.display = "block";
        }
      }

     dots[slideIndex].classList.add("active");
  }
   
    showSlides();

    setInterval(() => {
      slideIndex++;
      if (slideIndex * 2 >= document.getElementsByClassName("column").length) {
        slideIndex = 0;
      }
      showSlides();
    }, 6000);

    function currentSlide(n) {
      slideIndex = n * 2;
      showSlides();
    }

    function plusSlides(n) {
      slideIndex += n;
      if (slideIndex < 0) {
        slideIndex = Math.ceil(document.getElementsByClassName("column").length / 2) - 1;
      }
      if (slideIndex >= Math.ceil(document.getElementsByClassName("column").length / 2)) {
        slideIndex = 0;
      }
      showSlides();
    }