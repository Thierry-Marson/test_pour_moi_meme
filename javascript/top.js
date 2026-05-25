const initSlider = () => {
    const imageList = document.querySelector(".slider-wrapper .image-list")
    const slideButtons = document.querySelectorAll(".slider-wrapper .slide-btn");
   // const sliderScrollbar = document.querySelector(".container .slider-scrollbar");
    //const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb");
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

    //slide images according to the slide button clicks//
    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "prev-slide" ? -1 : 1;
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({ left: scrollAmount , behavior: "smooth" });
        });
    });

    const handleSlidebuttons = () => {
        slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "block";
        slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "block";
    } 

    // update scrollbar thumb position based on image scroll //
    
   // const updateScrollThumbPosition = () => {
      //  const scrollPosition = imageList.scrollLeft;
        //const thumbPosition = (scrollPosition / maxScrollLeft) * (slider-scrollbar.clientWidth - scrollbarThumb.offsetWidth);
       // scrollbarThumb.style.left = '${'
    //}
    imageList.addEventListener("scroll", () => {
        handleSlidebuttons();
        //updateScrollThumbPosition();
    });
}

window.addEventListener("load",initSlider);