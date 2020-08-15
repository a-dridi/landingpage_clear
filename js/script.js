//Current year display
(function () {
    let currentDate = new Date();
    document.getElementById("yearDisplay").textContent = currentDate.getFullYear();
})();

//Recommendation slider
var sliderCurrentIndex = 1;
displayRecommendationSlide(sliderCurrentIndex);

/**
 * Displays the passed slide index. If < 0, then the last slide will be displayed. If bigger then the amount of slides, then the first one will be displayed.
 * The slide with the passed index will be displayed as a "block". All the other are hidden with "none".
 * @param {*} newSlideIndex  Index of the slide that should be displayed
 */
function displayRecommendationSlide(newSlideIndex) {
    var i;
    var recommendationSlides = document.getElementsByClassName("recommendation-slide");
    var recommendationSlidesLength = recommendationSlides.length;
    var recommendationDots = document.getElementsByClassName("recommendation-dot");
    var recommendationDotsLength = recommendationDots.length;
    if (newSlideIndex > recommendationSlidesLength) {
        sliderCurrentIndex = 1;
    }
    if (newSlideIndex < 1) {
        sliderCurrentIndex = recommendationSlides.length;
    }
    for (i = 0; i < recommendationSlidesLength; i++) {
        recommendationSlides[i].style.display = "none";
    }
    for (i = 0; i < recommendationDotsLength; i++) {
        recommendationDots[i].className = recommendationDots[i].className.replace(" active", "");
    }
    recommendationSlides[sliderCurrentIndex - 1].style.display = "block";
    recommendationDots[sliderCurrentIndex - 1].className += " active";
}

//Change current slider position index and move slider about the passed variable amountOfPositions. Negative values if you want to go backwards.
function moveRecommendationSlider(amountOfPositions) {
    displayRecommendationSlide(sliderCurrentIndex += amountOfPositions);
}

//Show certain slide and change current slide index to the passed variable showSlideIndex.
function currentRecommendationSlide(showSlideIndex) {
    displayRecommendationSlide(sliderCurrentIndex = showSlideIndex);
}