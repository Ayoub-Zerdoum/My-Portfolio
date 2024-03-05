const settingsIcon = document.getElementById("settings-icon");
const colorOptions = document.getElementById("color-options");
const Options = document.getElementById("options");

  settingsIcon.addEventListener("click", function () {
    Options.style.display = Options.style.display === "none" ? "block" : "none";
  });

  // Add event listeners for color options
  const colorOptionElements = document.querySelectorAll(".color-option");
  colorOptionElements.forEach(function (colorOption) {
    const colorValue = colorOption.dataset.color;

    colorOption.style.backgroundColor = colorValue;

    colorOption.addEventListener("click", function () {
      const selectedColor = this.dataset.color;
      // Set the selected color as a CSS variable
      document.documentElement.style.setProperty("--main-color", selectedColor);
      document.documentElement.style.setProperty('--darkened-color', hexToRgb(getComputedStyle(document.documentElement).getPropertyValue('--main-color')));
    });
  });


function hexToRgb(hex) {
  // Remove the hash if it exists
  hex = hex.replace(/^#/, '');

  // Parse the components
  const bigint = parseInt(hex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  return `${r}, ${g}, ${b}`;
}