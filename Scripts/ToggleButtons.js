function toggleSection(section) {
    // Get all section title containers
    const titleContainers = document.querySelectorAll('.section_title_container');

    const eduInfoSections = document.querySelectorAll('.edu-info');
    const careerInfoSections = document.querySelectorAll('.career-info');  
    const eduList = document.querySelector('.edu-list');
    const careerList = document.querySelector('.career-list'); 

    // Remove 'active' class from all titles
    titleContainers.forEach(container => container.classList.remove('active'));

    // Add 'active' class to the clicked title
    const clickedContainer = document.querySelector(`.${section}`);
    clickedContainer.classList.add('active');

    if (section === 'edu') {
        /*
        eduList.style.display = 'block';
        careerList.style.display = 'none';
        */

        eduList.classList.add("active");
        careerList.classList.remove("active");
        careerInfoSections.forEach(section => section.classList.remove('active'));

        // Activate the first edu list item
        const firstEduListItem = document.querySelector('.edu-list li');
        if (firstEduListItem) {
            firstEduListItem.classList.add('active');
        }

        // Show the corresponding info section
        const firstEduInfoSection = document.querySelector('.edu-info');
        if (firstEduInfoSection) {
            firstEduInfoSection.classList.add('active');
        }
    } else if (section === 'career') {
        /*
        eduList.style.display = 'none';
        careerList.style.display = 'block';
        */
        eduList.classList.remove("active");
        careerList.classList.add("active");
        eduInfoSections.forEach(section => section.classList.remove('active'));


        // Activate the first career list item
        const firstCareerListItem = document.querySelector('.career-list li');
        if (firstCareerListItem) {
            firstCareerListItem.classList.add('active');
        }

        // Show the corresponding info section
        const firstCareerInfoSection = document.querySelector('.career-info');
        if (firstCareerInfoSection) {
            firstCareerInfoSection.classList.add('active');
        }
    }
}