window.addEventListener("DOMContentLoaded", () => {
  activeCategory.init();
  fixedMenuCategory.init();
  scrollSpy.init();
  modal.init();
  setWidthMenuDesc.init();
});

//global variable
const categoryItem = document.querySelectorAll(".category__item");
const menuBar = document.querySelector(".menubar");
const menuHeight = menuBar.getBoundingClientRect().height;

//scrollSpy
const scrollSpy = {
  init: function () {
    this.scrollSpy();
  },
  scrollSpy: function () {
    categoryItem.forEach((item) => {
      item.addEventListener("click", (e) => {
        e.preventDefault();

        const id = e.currentTarget.dataset.title;
        const element = document.getElementById(id);
        const fixedMenu = menuBar.classList.contains("menubar--fixed");
        let position = element.offsetTop - menuHeight;

        if (!fixedMenu) {
          position = position - menuHeight;
        }
        window.scroll({
          left: 0,
          top: position,
        });
        window.animate;
      });
    });
  },
};

//fixed menu
const fixedMenuCategory = {
  init: function () {
    this.fixedMenuCategory();
  },
  fixedMenuCategory: function () {
    window.addEventListener("scroll", () => {
      const scrollHeight = window.pageYOffset;
      if (scrollHeight > menuHeight) {
        menuBar.classList.add("menubar--fixed");
      } else {
        menuBar.classList.remove("menubar--fixed");
      }
    });
  },
};

//active category menu
const activeCategory = {
  init: function () {
    this.activeCategory();
  },
  activeCategory: function () {
    categoryItem.forEach((item) => {
      item.addEventListener("click", (e) => {
        categoryItem.forEach((category) => {
          if (category.classList.contains("menu__item--active")) {
            category.classList.remove("menu__item--active");
          }
          e.currentTarget.classList.add("menu__item--active");
        });
      });
    });
  },
};

//modal
const modal = {
  init: function () {
    this.modal();
  },
  modal: function () {
    const productImg = document.querySelectorAll(".menu__img img");
    const modalElement = (element) =>
      document.querySelector(`.image-modal-popup ${element}`);
    const body = document.querySelector("body");
    document.addEventListener("click", () => {
      body.style.overflow = "auto";
      modalPopup.style.display = "none";
    });
    const modalPopup = document.querySelector(".image-modal-popup");

    productImg.forEach((img) => {
      const data = img.dataset;
      img.addEventListener("click", (e) => {
        body.style.overflow = "hidden";
        e.stopPropagation();
        modalPopup.style.display = "block";
        modalElement("h1").innerHTML = data.title;
        modalElement("p").innerHTML = data.price;
        //modalElement('a').href = data.url;
        //modalElement('.secondary-link').href = data.repo;
        modalElement("img").src = img.src;
      });
    });
  },
};

// set width menu desc
const setWidthMenuDesc = {
  init: function () {
    this.setWidthMenuDesc();
  },
  setWidthMenuDesc() {
    const imgProduct = document.querySelector(".menu__img");
    const menuDesc = document.querySelectorAll(".menu__desc");

    let imgProductWidth = imgProduct.getBoundingClientRect().width;
    menuDesc.forEach((img) => {
      img.style.width = `${imgProductWidth}px`;
    });
  },
};
