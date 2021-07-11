import { fetchPostAPI } from "../helpers/ajax";
import gsap from "gsap";

export default class FilterPage {
  constructor(
    params = {
      formSelector: "",
      productsHolderSelector: "",
      productSelector: "",
    }
  ) {
    this.formSelector = params.formSelector;
    this.form = null;

    this.productsHolderSelector = params.productsHolderSelector;
    this.productsHolder = null;

    this.productSelector = params.productSelector;

    this.postUrl = "";

    //animations
    this.removeProducts = gsap.to(this.productSelector, {
      y: 100,
      opacity: 0,
      duration: 0.3,
      ease: "power2.out",
      paused: true,
    });
  }

  init() {
    //get elements
    this.form = document.querySelector(this.formSelector);
    this.productsHolder = document.querySelector(this.productsHolderSelector);

    if (this.form && this.productsHolder) {
      //listen for submit
      this.form.addEventListener("submit", (e) => this.handleSubmitForm(e));
    }
  }

  handleSubmitForm(e) {
    e.preventDefault();

    const data = new FormData();

    //dit is de functe om een post request te doen naar de server maar omdat die er niet is gaan we het faken
    /* fetchPostAPI({
      url: this.postUrl,
      formData: data,
    })
      .then((r) => {
        if (r.succes) {
          this.updateproducts(r.products);
        } else {
          //display error
        }
      })
      .catch((e) => {
        console.log(e.error);
      });*/

    //test code
    this.updateproducts();
  }

  updateproducts() {
    //normaal krijgen we hier nieuwe items binnen maar voor nu gaan we gewoon de current items weg halen en dan weer terug zetten
    const products = this.productsHolder.querySelectorAll(this.productSelector);

    this.removeProducts.restart();
    this.removeProducts.play();

    //fake loading new items
    setTimeout(() => {
      gsap.fromTo(
        this.productSelector,
        { y: -100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.3,
          ease: "power2.out",
          stagger: 0.05,
        }
      );
    }, 300);
  }
}
