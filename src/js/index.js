import "../css/index.scss";
import HamburgerNav from "./classes/HamburgerNav";

const init = () => {
  const hamBurger = new HamburgerNav({
    navSelector: ".filterHolder",
    navOpenBtn: ".filterbtn",
    navCloseBtn: ".filterbtn",
  });

  hamBurger.init();
};

init();
