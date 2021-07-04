export default class StarRating {
  constructor(
    params = {
      starsHolderSelector: "",
      clickedAnimClass: "",
    }
  ) {
    this.starsHolderSelector = params.starsHolderSelector;
    this.starsHolder = null;

    this.clickedAnimClass = params.clickedAnimClass;

    this.stars = [];

    this.lastIndex = -1;
    this.activeIndex = -1;
  }

  init() {
    //set the elements
    this.starsHolder = document.querySelector(this.starsHolderSelector);

    if (this.starsHolder) {
      //exists zso continue

      this.stars = this.starsHolder.querySelectorAll("input[type=checkbox]");

      this.stars.forEach((star, index) => {
        star.addEventListener("input", (e) => this.handleChange(e, index));
      });
    }
  }

  handleChange(e, index) {
    this.updatestars(index);
    this.setAntimation(e.currentTarget);
  }

  setAntimation(elem) {
    if (this.clickedAnimClass) {
      elem.parentElement.classList.remove(this.clickedAnimClass);
      setTimeout(() => {
        elem.parentElement.classList.add(this.clickedAnimClass);
      }, 50);
    }
  }

  updatestars(index) {
    this.lastIndex = this.activeIndex;
    this.activeIndex = index;

    this.stars.forEach((star, starIndex) => {
      if (this.lastIndex !== this.activeIndex) {
        star.checked = index >= starIndex;
      } else {
        star.checked = false;
        this.lastIndex = -1;
        this.activeIndex = -1;
      }

      //reset animation
      star.parentElement.classList.remove(this.clickedAnimClass);
    });
  }
}
