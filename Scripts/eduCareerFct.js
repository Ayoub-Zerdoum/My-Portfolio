const eduList = document.querySelector('.edu-list');
const careerList = document.querySelector('.career-list');
const eduInfoSections = document.querySelectorAll('.edu-info');
const careerInfoSections = document.querySelectorAll('.career-info');


eduList.addEventListener('click', function (event) {
    // Find the closest li to the clicked element
    const li = event.target.closest('li');
    if (!li) return; 

    const targetEntryId = li.getAttribute('data-id');
    //const targetEntryId = event.target.getAttribute('data-id');

    // Remove 'active' class from all li elements
    const eduListItems = document.querySelectorAll('.edu-list li');
    eduListItems.forEach(item => item.classList.remove('active'));

    // Add 'active' class to the clicked li element
    li.classList.add('active');

    // Hide all info sections
    eduInfoSections.forEach(section => section.classList.remove('active'));
    careerInfoSections.forEach(section => section.classList.remove('active'));


    // Show the clicked info section
    const targetInfoSection = document.getElementById(targetEntryId);
    if (targetInfoSection) {
        targetInfoSection.classList.add('active');
    }
});

careerList.addEventListener('click', function (event) {

    const li = event.target.closest('li');
    if (!li) return; 

    const targetEntryId = li.getAttribute('data-id');


    // Remove 'active' class from all li elements
    const careerListItems = document.querySelectorAll('.career-list li');
    careerListItems.forEach(item => item.classList.remove('active'));

    // Add 'active' class to the clicked li element
    li.classList.add('active');

    // Hide all info sections
    careerInfoSections.forEach(section => section.classList.remove('active'));
    eduInfoSections.forEach(section => section.classList.remove('active'));

    // Show the clicked info section
    const targetInfoSection = document.getElementById(targetEntryId);
    if (targetInfoSection) {
        targetInfoSection.classList.add('active');
    }
});

