/*a slider that only works manually*/ 
function initializeSlider(imageArray, sliderContainer) {
    const slider = sliderContainer;
    let imgContainer = sliderContainer.querySelector('.img_container');
    const btn_forward = sliderContainer.querySelector('.forward');
    const btn_backward = sliderContainer.querySelector('.backward');

    let indexImg = 0;

    // Initialize the first image
    const img = document.createElement('img');
    img.src = imageArray[indexImg];
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
        nextImg.src = imageArray[indexImg];
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
    imgContainer.appendChild(img);

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
