function toggleTriSection() {
    const triButton = document.querySelector('.tri-button');
    const triSection = document.querySelector('.tri-section');
    const arrow = document.querySelector('.arrow');

    // Toggle 'active' class on tri-button
    triButton.classList.toggle('active');

    // Check if tri-button has 'active' class
    if (triButton.classList.contains('active')) {
        // Add 'arrow-up' class to arrow
        arrow.classList.add('arrow-up');
        // Add 'active' class to tri-section
        triSection.classList.add('active');
    } else {
        // Remove 'arrow-up' class from arrow
        arrow.classList.remove('arrow-up');
        // Remove 'active' class from tri-section
        triSection.classList.remove('active');
    }
}

function deactivateTriSection() {
    const triButton = document.querySelector('.tri-button');
    const arrow = document.querySelector('.arrow');
    const triSection = document.querySelector('.tri-section');

    // Remove 'active' class from tri-button
    triButton.classList.remove('active');

    // Remove 'arrow-up' class from arrow
    arrow.classList.remove('arrow-up');

    // Remove 'active' class from tri-section
    triSection.classList.remove('active');
}

let projects = [
    {
        id: "projetStade",
        domaines: ["Desktop"],
        techs: ["java", "javafx", "mysql"]
    },
    {
        id: "AtlasDashboard",
        domaines: ["Web"],
        techs: ["python", "dash", "pandas", "numpy", "plotly"]
    },
    {
        id: "MangaAnimeWebsite",
        domaines: ["Web"],
        techs: ["html", "css", "javascript", "bootstrap"]
    },
    {
        id: "GestionGarage",
        domaines: ["Desktop"],
        techs: ["c++","c"]
    }
];

/*tri process */
const triDomaineContainer = document.getElementById('tri-domaine-container');
const triTechContainer = document.getElementById('tri-tech-container');

// Add click event listener to tri-domaine and tri-tech items
triDomaineContainer.addEventListener('click', handleFilterClick);
triTechContainer.addEventListener('click', handleFilterClick);

let selectedDomaine = 'ALL';
let selectedTech = 'ALL';


function handleFilterClick(event) {
    if (event.target.classList.contains('tri-item')) {
        const containerId = event.currentTarget.id;

        if (containerId === 'tri-domaine-container') {
            selectedDomaine = event.target.dataset.domaine;
        } else if (containerId === 'tri-tech-container') {
            selectedTech = event.target.dataset.tech;
        }

        console.log("Selected Domaine:", selectedDomaine);
        console.log("Selected Tech:", selectedTech);
        console.log("containerId:", containerId);

        filterProjects(selectedDomaine, selectedTech);
        updateActiveItem(selectedDomaine, selectedTech);
    }
}

function filterProjects(selectedDomaine, selectedTech) {
    console.log("domaine:",selectedDomaine,"---tech",selectedTech);
    const filteredProjects = projects.filter(project => {
        const isDomaineMatch = selectedDomaine === 'ALL' || project.domaines.includes(selectedDomaine);
        const isTechMatch = selectedTech === 'ALL' || project.techs.includes(selectedTech);

        console.log(isDomaineMatch,"---",isTechMatch)
        return isDomaineMatch && isTechMatch;
    });

    // Implement logic to display the filtered projects
    displayProjects(filteredProjects);
}

function displayProjects(filteredProjects) {
    const cardContainers = document.querySelectorAll('.card-container');

    cardContainers.forEach(container => {
        const projectId = container.id;
        const project = filteredProjects.find(p => p.id === projectId);

        if (project) {
            container.style.display = 'block';
        } else {
            container.style.display = 'none';
        }
    });
}

function updateActiveItem(selectedDomaine, selectedTech) {

    const DomaineItems = triDomaineContainer.querySelectorAll('.tri-item');
    const TechItems = triTechContainer.querySelectorAll('.tri-item');

    // Remove active class from all items
    DomaineItems.forEach(item => {
        item.classList.remove('active');
    });
    TechItems.forEach(item => {
        item.classList.remove('active');
    });

    // Add active class to the selected items
    const selectedDomaineItem = triDomaineContainer.querySelector(`[data-domaine="${selectedDomaine}"]`);
    const selectedTechItem = triTechContainer.querySelector(`[data-tech="${selectedTech}"]`);

    selectedTechItem.classList.add('active');
    selectedDomaineItem.classList.add('active');
}