export default class ClearForm {
  constructor(
    params = {
      formSelector: "",
      clearBtnSelector: "",
      blackList: [],
    }
  ) {
    this.formSelector = params.formSelector;
    this.form = null;

    this.clearBtnSelector = params.clearBtnSelector;
    this.clearBtn = null;

    this.blackList = params.blackList;
  }

  init() {
    this.form = document.querySelector(this.formSelector);
    this.clearBtn = document.querySelector(this.clearBtnSelector);

    if (this.form) {
      this.clearBtn.addEventListener("click", (e) =>
        this.handleClickClearBtn(e)
      );
    }
  }

  handleClickClearBtn(e) {
    e.preventDefault();

    this.clearForm();
  }

  clearForm() {
    const inputs = this.form.querySelectorAll("input");

    if (inputs) {
      inputs.forEach((input) => {
        const present = this.blackList.find((className) =>
          input.classList.contains(className)
        );

        if (!present) {
          //not blacklisted so go on
          const type = input.getAttribute("type");

          switch (type) {
            case "text":
              this.clearText(input);
              break;
            case "checkBox":
              this.clearCheckBox(input);
              break;
          }
        }
      });
    }
  }

  clearText(input) {
    input.value = "";
  }

  clearCheckBox(input) {
    input.checked = false;
  }
}
