import "../css/index.scss";
import HamburgerNav from "./classes/HamburgerNav";
import StarRating from "./classes/StarRating";
import ClearForm from "./classes/ClearForm";

const init = () => {
  const hamBurger = new HamburgerNav({
    navSelector: ".filterHolder",
    navOpenBtn: ".filterbtn",
    navCloseBtn: ".filterbtn",
  });

  hamBurger.init();

  const starRating = new StarRating({
    starsHolderSelector: ".starRatingHolder",
    clickedAnimClass: "clicked",
  });

  starRating.init();

  const clearFilter = new ClearForm({
    formSelector: ".filterHolder",
    clearBtnSelector: ".clearFilters",
    blackList: [],
  });

  clearFilter.init();
};

init();
