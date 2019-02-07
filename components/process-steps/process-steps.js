(function processSteps() {
  let contactlessSteps = [];
  let applePaySteps = [];
  let googlePaySteps = [];
  let bitcoinSteps = [];

  const processDropdown = document.querySelector('.process-dropdown');
  const processDropdownOptions = processDropdown.querySelector('.options-container');

  // Seperate the data into the relevant variables
  const separateSteps = processStepsData.reduce((acc, currentStep) => {
    switch (currentStep.option) {
      case 'contactless':
        contactlessSteps = [...currentStep.steps];
      break;
      case 'apple-pay':
        applePaySteps = [...currentStep.steps];
      break;
      case 'google-pay':
        googlePaySteps = [...currentStep.steps];
      break;
      case 'bitcoin':
        bitcoinSteps = [...currentStep.steps];
      break;
    }
    return acc;
  }, false);

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
  const contactlessElements = createStepElement(contactlessSteps);
  const applePayElements = createStepElement(applePaySteps);
  const googlePayElements = createStepElement(googlePaySteps);
  const bitcoinElements = createStepElement(bitcoinSteps);

  (function renderStepElements() {
    const parentSection = document.querySelector('.process-section .process-steps');
    const allElements = [...contactlessElements, ...applePayElements, ...googlePayElements, ...bitcoinElements];

    for (var i = 0; i < allElements.length; i++) {
      parentSection.appendChild(allElements[i]);
    }
  })();

  // Shows/hides elements when an option is selected on the process dropdown component
  function showSteps() {
    switch (processDropdown.dataset.selected) {
      case 'contactless':
        for (var i = 0; i < contactlessElements.length; i++) {
          contactlessElements[i].style.display = '';
        }
      break;
      case 'apple-pay':
        for (var i = 0; i < applePayElements.length; i++) {
          applePayElements[i].style.display = '';
        }
      break;

      case 'google-pay':
        for (var i = 0; i < googlePayElements.length; i++) {
          googlePayElements[i].style.display = '';
        }
      break;

      case 'bitcoin':
        for (var i = 0; i < bitcoinElements.length; i++) {
          bitcoinElements[i].style.display = '';
        }
      break;
    }
  }

  // When an option is clicked show steps
  processDropdownOptions.addEventListener('click', () => {
    // Hide all elements
    const allStepElements = document.querySelectorAll('.process-circle');
    for (var i = 0; i < allStepElements.length; i++) {
      allStepElements[i].style.display = 'none';
    }

    // Show selected elements
    showSteps();
  });

  // Show steps of initially selected option
  showSteps()
})();
