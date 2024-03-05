const homeContainer = document.querySelector('.Home_Container');
const spotlight = homeContainer.querySelector(':before');

homeContainer.addEventListener('mousemove', (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  // Update the position of the spotlight
  homeContainer.style.setProperty('--spotlight-position-x', `${mouseX}px`);
  homeContainer.style.setProperty('--spotlight-position-y', `${mouseY}px`);
});
//not used !!!!
function createHexagonGrid(rows) {
  const gridContainer = document.getElementById('hexagonGrid');

  // Clear existing content
  gridContainer.innerHTML = '';

  for (let i = 0; i < rows; i++) {
    const hexagonRow = document.createElement('div');
    hexagonRow.classList.add('hexagon-row');

    // Add a div with width 105px before each odd row
    if (i % 2 === 1) {
      const spacerDiv = document.createElement('div');
      spacerDiv.style.width ='60px';
      spacerDiv.style.backgroundColor="red"
      hexagonRow.appendChild(spacerDiv);
    }

    gridContainer.appendChild(hexagonRow);
    console.log('-----Row :'+ i );


    while (!isHexagonInContainer(hexagonRow, gridContainer)) {
      const hexagon = document.createElement('div');
      hexagon.classList.add('hexagon');
      hexagonRow.appendChild(hexagon);
      console.log('adding hexa to row :'+ i );

    }
  }
}

//not used !!!!
function isHexagonInContainer(row, gridContainer) {
  const hexagon = document.createElement('div');
  hexagon.classList.add('hexagon');
  row.appendChild(hexagon);

  const rect = hexagon.getBoundingClientRect();
  const containerRect = gridContainer.getBoundingClientRect();

  row.removeChild(hexagon);



  // Check if any part of the hexagon is outside the container
  const isOutside = (
    rect.right > containerRect.right ||
    rect.left < containerRect.left ||
    rect.bottom > containerRect.bottom ||
    rect.top < containerRect.top
  );

  console.log('Hexagon: ', rect);
  console.log('Container: ', containerRect);
  console.log('Is Outside', isOutside);

  return isOutside;
}

function createSimpleHexagonGrid(rows, hexagonsPerRow) {
  const gridContainer = document.getElementById('hexagonGrid');

  // Clear existing content
  gridContainer.innerHTML = '';

  for (let i = 0; i < rows; i++) {
    const hexagonRow = document.createElement('div');
    hexagonRow.classList.add('hexagon-row');

    gridContainer.appendChild(hexagonRow);
    console.log('-----Row :' + i);

    for (let j = 0; j < hexagonsPerRow; j++) {
      const hexagon = document.createElement('div');
      hexagon.classList.add('hexagon');
      hexagonRow.appendChild(hexagon);
      console.log('adding hexa to row :' + i);
    }
  }
}

function removeHexagonsOutsideContainer() {
  const gridContainer = document.getElementById('hexagonGrid');
  const hexagons = gridContainer.querySelectorAll('.hexagon');
  const containerRect = document.querySelector('.Home_Container').getBoundingClientRect();

  hexagons.forEach((hexagon) => {
    const rect = hexagon.getBoundingClientRect();

    // Check if any part of the hexagon is outside the container
    if (
      rect.right > containerRect.right ||
      rect.left < containerRect.left ||
      rect.bottom + 40 > containerRect.bottom ||
      rect.top < containerRect.top
    ) {
      hexagon.style.opacity = 0;
    }
  });
}



