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

        //remove active from all items
        const EduListItems = document.querySelectorAll('.edu-list li');
        EduListItems.forEach(item => item.classList.remove('active'));
        // Activate the first edu list item
        //const firstEduListItem = document.querySelector('.edu-list li');
        if (EduListItems[0]) {
            EduListItems[0].classList.add('active');
        }

        // Show the corresponding info section
        const EduInfoSection = document.querySelectorAll('.edu-info');
        EduInfoSection.forEach(section => section.classList.remove('active'));
        if (EduInfoSection[0]) {
            EduInfoSection[0].classList.add('active');
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
        const CareerListItem = document.querySelectorAll('.career-list li');
        CareerListItem.forEach(item => item.classList.remove('active'));
        if (CareerListItem[0]) {
            CareerListItem[0].classList.add('active');
        }

        // Show the corresponding info section
        const CareerInfoSection = document.querySelectorAll('.career-info');
        CareerInfoSection.forEach(section => section.classList.remove('active'));
        if (CareerInfoSection[0]) {
            CareerInfoSection[0].classList.add('active');
        }
    }
}