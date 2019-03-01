(function processSteps() {

  const processDropdown = document.querySelector('.process-dropdown');
  const processDropdownOptions = processDropdown.querySelector('.options-container');

  function createStepElement(data) {
    let output = [];
    let stepElement = document.createElement('div');
    stepElement.innerHTML = '<figure><img></figure><figcaption></figcaption>';

    for (var i = 0; i < data.length; i++) {
      let newStepElement = stepElement.cloneNode(true);
      newStepElement.classList.add('h-scroll-item');
      newStepElement.classList.add('process-circle');
      newStepElement.classList.add(`${data[i]['step-person']}`);
      newStepElement.classList.add(`${data[i]['option']}`);
      newStepElement.style.display = 'none';
      newStepElement.querySelector('img').src = data[i]['step-img'];
      newStepElement.querySelector('figcaption').textContent = data[i]['step-text'];

      output.push(newStepElement);
    }
    return output;
  }

  // Create elements from the dataset
   const allStepElements = createStepElement(processStepsData);

  (function renderStepElements() {
    const targetSection = document.querySelector('.process-section .process-steps');

    for (var i = 0; i < allStepElements.length; i++) {
      targetSection.appendChild(allStepElements[i]);
    }
  })();

  // Shows elements when an option is selected on the process dropdown component
  function showSelectedSteps() {
    const selectedOption = processDropdown.dataset.selected;

    for (var i = 0; i < allStepElements.length; i++) {
      const elementIsSelected = allStepElements[i].classList.contains(selectedOption);

      if (elementIsSelected) {
        allStepElements[i].style.display = '';
      }
    }
  }

  // When an option is clicked show steps
  processDropdownOptions.addEventListener('click', () => {
    // Hide all elements
    for (var i = 0; i < allStepElements.length; i++) {
      allStepElements[i].style.display = 'none';
    }

    // Show selected elements
    showSelectedSteps();
  });

  // Show steps of initially selected option
  showSelectedSteps();
})();
