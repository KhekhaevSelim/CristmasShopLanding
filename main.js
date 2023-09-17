document.addEventListener("DOMContentLoaded", function () {
    const bannerContainerWrapper = document.querySelector(".bannerContainerWrapper");
     bannerContainer = Array.from(bannerContainerWrapper.children);
    let counter = 1;
    function nextSlide(){
        if(counter % 2 !== 0){
            const firstBanner = bannerContainer[0];
            const secondBanner = bannerContainer[1];
            firstBanner.parentNode.insertBefore(secondBanner, firstBanner);
            bannerContainer = Array.from(bannerContainerWrapper.children);
            counter++;
        } else{
            const firstBanner = bannerContainer[1];
            const secondBanner = bannerContainer[2];
            firstBanner.parentNode.insertBefore(secondBanner, firstBanner);
            bannerContainer = Array.from(bannerContainerWrapper.children);
            counter++;
        }     
    }
    setInterval(nextSlide, 2500);
  });