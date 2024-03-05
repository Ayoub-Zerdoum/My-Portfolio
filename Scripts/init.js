document.addEventListener("DOMContentLoaded", function() {
    updateContentBasedOnLanguage("en");
    createSimpleHexagonGrid(10, 20);
    removeHexagonsOutsideContainer();
});

window.addEventListener('resize', function () {
    createSimpleHexagonGrid(10, 20);
    removeHexagonsOutsideContainer();
});
