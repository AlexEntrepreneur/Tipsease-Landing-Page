class Dropdown {
  constructor(element) {
    this.component = element;
    this.button = this.component.querySelector('.dropdown-btn');
    this.optionsContainer = this.component.querySelector('.options-container');
    this.closeOptionsElement = this.optionsContainer.querySelector('.close-options-bg-layer');
    this.optionsElements = Array.from(this.optionsContainer.querySelectorAll('.option'));
    this.currentOption = this.optionsElements[0];

    this.selectOption(this.currentOption);

    this.button.addEventListener('click', () => this.showOptions());
    this.optionsElements.forEach(option => {
      option.addEventListener('click', (eventObject) => {
        const { target } = eventObject;

        this.selectOption(target);
      });
    });
  }

  showOptions(){
    this.optionsContainer.style.display = 'block';
    this.closeOptionsElement.onclick = () => {
      this.optionsContainer.style.display = '';
    }
  }

  hideOptions() {
    this.optionsContainer.style.display = '';
  }

  selectOption(option) {
    const buttonText = this.button.querySelector('.selected-value');
    const optionText = option.textContent;

    buttonText.textContent = optionText;
    this.component.dataset.selected = option.dataset.value;
    this.hideOptions();
  }
}

const allDropdowns = document.querySelectorAll('.dropdown').forEach(dropdown => new Dropdown(dropdown));
