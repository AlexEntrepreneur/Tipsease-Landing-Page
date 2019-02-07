const processCirclesData = [
  { "option": "contactless",
  "steps": [
      { "step-person": "customer", "step-text": "Customer Chooses Amount", "step-img": "assets/img/ls.png", "option": "contactless"},
      { "step-person": "you", "step-text": "Phone Turns Into Card Reader", "step-img": "assets/img/ls.png", "option": "contactless"},
      { "step-person": "customer", "step-text": "Taps Contactless To Phone", "step-img": "assets/img/ls.png", "option": "contactless"},
      { "step-person": "you", "step-text": "Receive Your Tip!", "step-img": "assets/img/ls.png", "option": "contactless"},
  ]},
  { "option": "apple-pay",
  "steps": [
      { "step-person": "customer", "step-text": "Customer Chooses Amount", "step-img": "assets/img/ls.png", "option": "apple-pay"},
      { "step-person": "both", "step-text": "Tap Phones Together", "step-img": "assets/img/ls.png", "option": "apple-pay"},
      { "step-person": "customer", "step-text": "Authenticate", "step-img": "assets/img/ls.png", "option": "apple-pay"},
      { "step-person": "you", "step-text": "Receive Your Tip!", "step-img": "assets/img/ls.png", "option": "apple-pay"},
  ]},
  { "option": "google-pay",
  "steps": [
      { "step-person": "customer", "step-text": "Customer Chooses Amount", "step-img": "assets/img/ls.png", "option": "google-pay"},
      { "step-person": "both", "step-text": "Tap Phones Together", "step-img": "assets/img/ls.png", "option": "google-pay"},
      { "step-person": "you", "step-text": "Receive Your Tip!", "step-img": "assets/img/ls.png", "option": "google-pay"},
  ]},
  { "option": "bitcoin",
  "steps": [
      { "step-person": "customer", "step-text": "Customer Chooses Amount", "step-img": "assets/img/ls.png", "option": "bitcoin"},
      { "step-person": "you", "step-text": "Present QR Code", "step-img": "assets/img/ls.png", "option": "bitcoin"},
      { "step-person": "customer", "step-text": "Scans QR Code", "step-img": "assets/img/ls.png", "option": "bitcoin"},
      { "step-person": "you", "step-text": "Receive Your Tip!", "step-img": "assets/img/ls.png", "option": "bitcoin"},
  ]},
];
(function processCircles() {
  let contactlessSteps = [];
  let applePaySteps = [];
  let googlePaySteps = [];
  let bitcoinSteps = [];

  const separateSteps = processCirclesData.reduce((acc, currentStep) => {
    switch (currentStep.option) {
      case 'contactless':
      contactlessSteps = [...currentStep.steps];
      case 'apple-pay':
      applePaySteps = [...currentStep.steps];
      case 'google-pay':
      googlePaySteps = [...currentStep.steps];
      case 'bitcoin':
      bitcoinSteps = [...currentStep.steps];
      break;
      default:

    }
    return acc;
  }, false);

  const processDropdown = document.querySelector('.process-dropdown');

  function createStepElement(data) {
    let output = [];
    let stepDiv = document.createElement('div');
    stepDiv.innerHTML = '<figure><img></figure><figcaption></figcaption>';

    for (var i = 0; i < data.length; i++) {
      let newStep = stepDiv.cloneNode(true);
      newStep.classList.add('h-scroll-item');
      newStep.classList.add('process-circle');
      newStep.classList.add(`${data[i]['step-person']}`);
      newStep.classList.add(`${data[i]['option']}`);
      newStep.style.display = 'none';
      newStep.querySelector('img').src = data[i]['step-img'];
      newStep.querySelector('figcaption').textContent = data[i]['step-text'];

      output.push(newStep);
    }
    return output;
  }
  const contactlessElements = createStepElement(contactlessSteps);
  const applePayElements = createStepElement(applePaySteps);
  const googlePayElements = createStepElement(googlePaySteps);
  const bitcoinElements = createStepElement(bitcoinSteps);

  (function appendAllSteps() {
    const allElements = [...contactlessElements, ...applePayElements, ...googlePayElements, ...bitcoinElements];
    const parentSection = document.querySelector('.process-section .process-steps');

    for (var i = 0; i < allElements.length; i++) {
      parentSection.appendChild(allElements[i]);
    }
  })();

  function showSteps() {
    switch (processDropdown.dataset.selected) {
      case 'contactless':
        const contactlessElements = document.querySelectorAll('.contactless');
        for (var i = 0; i < contactlessElements.length; i++) {
          contactlessElements[i].style.display = '';
        }
      break;
      case 'apple-pay':
        const applePayElements = document.querySelectorAll('.apple-pay');
        for (var i = 0; i < applePayElements.length; i++) {
          applePayElements[i].style.display = '';
        }
      break;

      case 'google-pay':
        const googlePayElements = document.querySelectorAll('.google-pay');
        for (var i = 0; i < googlePayElements.length; i++) {
          googlePayElements[i].style.display = '';
        }
      break;

      case 'bitcoin':
        const bitcoinElements = document.querySelectorAll('.bitcoin');
        for (var i = 0; i < bitcoinElements.length; i++) {
          bitcoinElements[i].style.display = '';
        }
      break;
    }
  }

  processDropdown.querySelector('.options-container').addEventListener('click', () => {
    const allStepElements = document.querySelectorAll('.process-circle');
    for (var i = 0; i < allStepElements.length; i++) {
      allStepElements[i].style.display = 'none';
    }
    showSteps();
  });

  window.addEventListener('load', () => setTimeout(function () {
    showSteps();
  }, 100));
})();
