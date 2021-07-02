export default class HamburgerNav {
  constructor(
    params = {
      navSelector: "",
      navOpenBtn: "",
      navCloseBtn: "",
    }
  ) {
    this.navSelector = params.navSelector;
    this.navElem = null;

    this.navOpenBtnSelector = params.navOpenBtn;
    this.navOpenBtn = null;

    this.navCloseBtnSelector = params.navOpenBtn;
    this.navCloseBtn = null;

    this.links = [];
  }

  init() {
    //set elements
    this.navElem = document.querySelector(this.navSelector);
    this.navOpenBtn = document.querySelector(this.navOpenBtnSelector);
    this.navCloseBtn = document.querySelector(this.navCloseBtnSelector);

    //check if exist
    if (this.navElem && this.navOpenBtn && this.navCloseBtn) {
      //check if same openBtn
      if (this.navOpenBtn === this.navCloseBtn) {
        this.navOpenBtn.removeEventListener("click", (e) =>
          this.handleToggleNav(e)
        );
        this.navOpenBtn.addEventListener("click", (e) =>
          this.handleToggleNav(e)
        );
      } else {
        //add event listeners
        this.navOpenBtn.addEventListener("click", (e) =>
          this.handleToggleNav(e)
        );
        this.navOpenBtn.addEventListener("click", (e) => this.handleOpenNav(e));
        this.navOpenBtn.removeEventListener("click", (e) =>
          this.handleToggleNav(e)
        );
        this.navCloseBtn.addEventListener("click", (e) =>
          this.handleCloseNav(e)
        );
      }

      //find all links
      this.links = this.navElem.querySelectorAll("a");

      //addlisteners to listen for #links
      this.links.forEach((link) => {
        if (link.href.includes("#")) {
          link.removeEventListener("click", (e) => this.handleClickHash(e));
          link.addEventListener("click", (e) => this.handleClickHash(e));
        }
      });
    }
  }

  handleClickHash(e) {
    //close the current nav
    this.closeNav();
  }

  handleToggleNav(e) {
    e.preventDefault();
    this.navElem.classList.toggle("open");
    this.navOpenBtn.classList.toggle("open");
  }

  handleOpenNav(e) {
    e.preventDefault();
    this.navElem.classList.add("open");
  }

  handleCloseNav(e) {
    e.preventDefault();
    this.navElem.classList.remove("open");
  }

  closeNav() {
    this.navElem.classList.remove("open");
    this.navOpenBtn.classList.remove("open");
  }
}
