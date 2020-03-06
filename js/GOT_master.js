(() => {
  // variables at the top -> elements on the page we need to work with
  let sigilButtons = document.querySelectorAll(".sigilContainer"),
      lightBox = document.querySelector(".lightbox"),
      gotVideo = lightBox.querySelector("video"),
      closeLightBox = lightBox.querySelector(".lightbox-close");

  // events go in the middle
  function showLightbox() {
    let houseName = this.className.split(" ")[1];
    //takes the first letter in the source and uppercases it
    //adds it to the rest of the word
    let newSource = houseName.charAt(0).toUpperCase() + houseName.slice(1);
    let targetSource = (`video/House-${newSource}.mp4`);


    // pop open a lightbox here and show some content
    // start with a video
    // debugger;
    lightBox.classList.add("show-lightbox");


    //set the source
    gotVideo.src = targetSource;
    //load the source
    gotVideo.load();
    //play the source
    gotVideo.play();
  }

  function hideLightBox() {
    lightBox.classList.remove("show-lightbox");

    gotVideo.pause();
    gotVideo.currentTime = 0;
  }

  // add a click event to the sigilButtons
  sigilButtons.forEach(button => button.addEventListener("click", showLightbox));

  // add an event handler for the lightbox close button
  closeLightBox.addEventListener("click", hideLightBox);
})();
