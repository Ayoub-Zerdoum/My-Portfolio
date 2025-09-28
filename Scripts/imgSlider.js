/*a slider that only works manually*/ 
function initializeSlider(imageArray, sliderContainer, startIndex = 0) {
    const slider = sliderContainer;
    let imgContainer = sliderContainer.querySelector('.img_container');
    const btn_forward = sliderContainer.querySelector('.forward');
    const btn_backward = sliderContainer.querySelector('.backward');

    let indexImg = startIndex;
    sliderContainer._images = imageArray;
    sliderContainer._indexImg = indexImg;

    // Initialize the first image
    const img = document.createElement('img');
    img.src = imageArray[indexImg];
    img.dataset.srcOriginal = imageArray[indexImg]; //
    img.classList.add('slider-img');
    imgContainer.appendChild(img);

    btn_forward.addEventListener('click', () => {
        let imgContainer = sliderContainer.querySelector('.img_container');
        if (imgContainer.classList.contains('animating')) {
            return; // Prevent button click during animation
        }

        imgContainer.classList.add('animating'); // Add class to indicate animation
        btn_forward.classList.add('disabled');
        btn_backward.classList.add('disabled');

        indexImg = (indexImg + 1) % imageArray.length;

        // Create a new .next-img container
        let nextImgContainer = document.createElement('div');
        nextImgContainer.classList.add('img_container', 'next');
        const nextImg = document.createElement('img');
        nextImg.classList.add('slider-img'); // <--- add this
        //nextImg.src = imageArray[indexImg];
        slider._indexImg = (slider._indexImg + 1) % slider._images.length;
        nextImg.src = slider._images[slider._indexImg];
        nextImgContainer.appendChild(nextImg);

        slider.appendChild(nextImgContainer);


        // Apply the slide-left animation to both containers
        imgContainer.classList.add('previous');
        nextImgContainer.style.animation = 'slide-left 1s ease-in-out both';

        // Remove the current container after animation completes
        nextImgContainer.addEventListener('animationend', () => {
            imgContainer.remove();
            nextImgContainer.classList.remove('next', 'animating');
            nextImgContainer.style.animation = '';

            btn_forward.classList.remove('disabled');
            btn_backward.classList.remove('disabled');
        });
    });

    btn_backward.addEventListener('click', () => {
        let imgContainer = sliderContainer.querySelector('.img_container');
        if (imgContainer.classList.contains('animating')) {
            return; // Prevent button click during animation
        }

        imgContainer.classList.add('animating'); // Add class to indicate animation
        btn_forward.classList.add('disabled');
        btn_backward.classList.add('disabled');

        indexImg = (indexImg - 1 + imageArray.length) % imageArray.length;

        // Create a new .previous-img container
        const previousImgContainer = document.createElement('div');
        previousImgContainer.classList.add('img_container', 'previous');
        const previousImg = document.createElement('img');
        previousImg.classList.add('slider-img'); // <--- add this

        previousImg.src = imageArray[indexImg];
        previousImgContainer.appendChild(previousImg);
        slider.appendChild(previousImgContainer);

        imgContainer.classList.add('next');
        previousImgContainer.style.animation = 'slide-right 1s ease-in-out both';

        // Remove the current container after animation completes
        previousImgContainer.addEventListener('animationend', () => {
            imgContainer.remove();
            previousImgContainer.classList.remove('previous', 'animating');
            previousImgContainer.style.animation = '';

            btn_forward.classList.remove('disabled');
            btn_backward.classList.remove('disabled');
        });
    });
}

/*a slider that have an interval*/ 
function initializeSlider2(imageArray, sliderContainer) {
    const slider = sliderContainer;
    let imgContainer = sliderContainer.querySelector('.img_container');
    const btn_forward = sliderContainer.querySelector('.forward');
    const btn_backward = sliderContainer.querySelector('.backward');

    let indexImg = 0;
    let autoSlideInterval;

    // Initialize the first image
    const img = document.createElement('img');
    img.src = imageArray[indexImg];
    img.dataset.srcOriginal = imageArray[indexImg]; //
    img.classList.add('slider-img'); //
    imgContainer.appendChild(img); 

    sliderContainer._images = imageArray;

    // Function to handle next slide
    function nextSlide() {
        let imgContainer = sliderContainer.querySelector('.img_container');
        if (imgContainer.classList.contains('animating')) {
            return; // Prevent slide during animation
        }

        imgContainer.classList.add('animating'); // Add class to indicate animation
        btn_forward.classList.add('disabled');
        btn_backward.classList.add('disabled');

        indexImg = (indexImg + 1) % imageArray.length;

        // Create a new .next-img container
        let nextImgContainer = document.createElement('div');
        nextImgContainer.classList.add('img_container', 'next');
        const nextImg = document.createElement('img');
        nextImg.src = imageArray[indexImg];
        // In forward/backward click handlers:
        nextImg.classList.add('slider-img'); // <-- important
        nextImgContainer.appendChild(nextImg);
        slider.appendChild(nextImgContainer);

        // Apply the slide-left animation to both containers
        imgContainer.classList.add('previous');
        nextImgContainer.style.animation = 'slide-left 1s ease-in-out both';

        // Remove the current container after animation completes
        nextImgContainer.addEventListener('animationend', () => {
            imgContainer.remove();
            nextImgContainer.classList.remove('next', 'animating');
            nextImgContainer.style.animation = '';

            btn_forward.classList.remove('disabled');
            btn_backward.classList.remove('disabled');
        });
    }

    // Function to handle previous slide
    function previousSlide() {
        let imgContainer = sliderContainer.querySelector('.img_container');
        if (imgContainer.classList.contains('animating')) {
            return; // Prevent slide during animation
        }

        imgContainer.classList.add('animating'); // Add class to indicate animation
        btn_forward.classList.add('disabled');
        btn_backward.classList.add('disabled');

        indexImg = (indexImg - 1 + imageArray.length) % imageArray.length;

        // Create a new .previous-img container
        const previousImgContainer = document.createElement('div');
        previousImgContainer.classList.add('img_container', 'previous');
        const previousImg = document.createElement('img');
        previousImg.src = imageArray[indexImg];
        previousImg.classList.add('slider-img'); // <-- important
        previousImgContainer.appendChild(previousImg);
        slider.appendChild(previousImgContainer);

        // Apply the slide-right animation to both containers
        imgContainer.classList.add('next');
        previousImgContainer.style.animation = 'slide-right 1s ease-in-out both';

        // Remove the current container after animation completes
        previousImgContainer.addEventListener('animationend', () => {
            imgContainer.remove();
            previousImgContainer.classList.remove('previous', 'animating');
            previousImgContainer.style.animation = '';

            btn_forward.classList.remove('disabled');
            btn_backward.classList.remove('disabled');
        });
    }

    // Function to start auto slide
    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, 5000); // Set up auto slide every 5 seconds
    }

    // Event listeners for manual navigation
    btn_forward.addEventListener('click', () => {
        clearInterval(autoSlideInterval); // Clear the auto slide interval
        nextSlide();
        startAutoSlide(); // Restart auto slide after manual navigation
    });

    btn_backward.addEventListener('click', () => {
        clearInterval(autoSlideInterval); // Clear the auto slide interval
        previousSlide();
        startAutoSlide(); // Restart auto slide after manual navigation
    });

    // Start auto slide initially
    startAutoSlide();
}


/************ fullscreen functions ********** */
const fullscreenOverlay = document.getElementById('fullscreenOverlay');
const fullscreenSlider = document.getElementById('fullscreenSlider');
const fullscreenClose = document.getElementById('fullscreenClose');

// Open fullscreen with images
function openFullscreen(images, startIndex = 0) {
    console.log("opening fullscreen")

  // Show overlay
  fullscreenOverlay.style.display = 'flex';
  console.log(fullscreenSlider._images)

  // Clear old images and state
    const imgContainer = fullscreenSlider.querySelector('.img_container');
    if (imgContainer) imgContainer.innerHTML = '';
    fullscreenSlider._images = images;   // store current images
    fullscreenSlider._indexImg = startIndex; // current indexImg



  // attach close handler now (remove previous to avoid duplicates)
  const closeBtn = document.getElementById('fullscreenClose');
  if (closeBtn) {
    closeBtn.removeEventListener('click', closeFullscreen); // safe even if not attached
    closeBtn.addEventListener('click', closeFullscreen);
  }

  if(!fullscreenSlider) console.log("no fullscreen container found !")
  // Reuse your existing initializer
  initializeSlider(images, fullscreenSlider, startIndex);

  // optional: click outside slider closes overlay (attach once)
  if (!fullscreenOverlay._outsideHandlerAttached) {
    fullscreenOverlay.addEventListener('click', (e) => {
      if (e.target === fullscreenOverlay) closeFullscreen();
    });
    fullscreenOverlay._outsideHandlerAttached = true;
  }

}


// named close function so removeEventListener works reliably
function closeFullscreen() {
  if (!fullscreenOverlay) return;
  // clear slider content so re-init is clean next time
  const imgContainer = fullscreenSlider && fullscreenSlider.querySelector('.img_container');
  if (imgContainer) imgContainer.innerHTML = '';
  // Remove _images reference
  fullscreenSlider._images = null;
  console.log(fullscreenSlider._images)
  fullscreenOverlay.style.display = 'none';
}

// Handle clicks on any slider image (outside fullscreen)
document.addEventListener('click', function (e) {
    console.log("clicking on an img")
  const clickedImg = e.target.closest('img.slider-img');
  if (!clickedImg) console.log("clicking img not found");
  if (!clickedImg) return;
  console.log("clicking img found")

  // Ignore clicks inside fullscreen
  if (clickedImg.closest('#fullscreenOverlay')) return;
  console.log("clicking outside")

  const slider = clickedImg.closest('.img_slider');
  if( !slider) console.log("slider not found")
  if( !slider._images) console.log("slider images not found")
  if (!slider || !slider._images) return;
  console.log("slider or sliders images found")

  const images = slider._images;
  const originalSrc = clickedImg.dataset.srcOriginal || clickedImg.src;
  let startIndex = images.indexOf(originalSrc);
  if (startIndex === -1) startIndex = 0;

  openFullscreen(images, startIndex);
});




let projectSpringbootGestionStageImages = [
    "./images/project captures/Gestion stage Spring/login.png",
    "./images/project captures/Gestion stage Spring/admin interface.png",
    "./images/project captures/Gestion stage Spring/adding notif.png",
    "./images/project captures/Gestion stage Spring/filter.png",
    "./images/project captures/Gestion stage Spring/interface student.png",
    "./images/project captures/Gestion stage Spring/contact info.png"
];


let projectStadeImages = [
    "./images/project captures/Projet Stade/login.png",
    "./images/project captures/Projet Stade/EventViewer1.png",
    "./images/project captures/Projet Stade/StadeViewer1.png",
    "./images/project captures/Projet Stade/EventViewer2.png",
    "./images/project captures/Projet Stade/TicketViewer.png",
    "./images/project captures/Projet Stade/EventManager1.png",
    "./images/project captures/Projet Stade/EventManager2.png",
    "./images/project captures/Projet Stade/EventManager3.png",
    "./images/project captures/Projet Stade/StadeBuilder1.png"
];

let projectDashboardImages = [
    "./images/project captures/dashboard atlas auto/capture_Dashboard.png"
];

let projectMangaAnimeImages = [
    "./images/project captures/mangan anime website/home1.png",
    "./images/project captures/mangan anime website/home2.png",
    "./images/project captures/mangan anime website/home3.png",
    "./images/project captures/mangan anime website/lightnovel.png",
    "./images/project captures/mangan anime website/manga.png",
    "./images/project captures/mangan anime website/manga.png",
    "./images/project captures/mangan anime website/mangaPage2.png",
    "./images/project captures/mangan anime website/animePage1.png"
];

let projectGestionGarageImages = [
    "./images/project captures/projet gestionGarage/menu1.png",
    "./images/project captures/projet gestionGarage/menuClient1.png",
    "./images/project captures/projet gestionGarage/menuEmployee1.png",
    "./images/project captures/projet gestionGarage/menuPieces0.png",
    "./images/project captures/projet gestionGarage/menuVoiture0.png",
    "./images/project captures/projet gestionGarage/menuReparation0.png",
    "./images/project captures/projet gestionGarage/menuFacture0.png"
];

const project_SpringbootStage_SliderContainer = document.querySelector('#SpringBootStage .img_slider');
initializeSlider2(projectSpringbootGestionStageImages, project_SpringbootStage_SliderContainer);

const projectStadeSliderContainer = document.querySelector('#projetStade .img_slider');
initializeSlider2(projectStadeImages, projectStadeSliderContainer);

const projectDashboardSliderContainer = document.querySelector('#AtlasDashboard .img_slider');
initializeSlider(projectDashboardImages, projectDashboardSliderContainer);

const projectMangaAnimeSliderContainer = document.querySelector('#MangaAnimeWebsite .img_slider');
initializeSlider2(projectMangaAnimeImages, projectMangaAnimeSliderContainer);

const projectGestionGarageSliderContainer = document.querySelector('#GestionGarage .img_slider');
initializeSlider2(projectGestionGarageImages, projectGestionGarageSliderContainer);
