const plusButtons = document.querySelectorAll('.plus');
plusButtons.forEach(button => {
    button.addEventListener('click', function () {
        const projectItem = this.closest('.card-container');
        if (projectItem) {
            projectItem.classList.toggle('back');
        }
    });
});

const returnButtons = document.querySelectorAll('.return-icon');
returnButtons.forEach(button => {
    button.addEventListener('click', function () {
        const projectItem = this.closest('.card-container');
        if (projectItem) {
            projectItem.classList.toggle('back');
        }
    });
});