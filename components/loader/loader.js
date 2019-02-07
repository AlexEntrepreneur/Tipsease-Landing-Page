class Loader {
  constructor(element) {
    this.element = element;

    window.addEventListener('load', () => {
        if (document.readyState === 'complete') {
          // Just putting this here for aesthetic purposes...
          setTimeout(() => {
            this.element.style.display = 'none';
          }, 2000);
        }
    });
  }
}

const allLoaderElements = document.querySelectorAll('.loader-component').forEach(loader => new Loader(loader));
