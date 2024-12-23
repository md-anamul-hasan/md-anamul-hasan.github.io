"use strict";

// Toggle element's active class
const toggleActiveClass = function (element) {
  element.classList.toggle("active");
};

// Sidebar toggle functionality
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");
sidebarBtn.addEventListener("click", function () {
  toggleActiveClass(sidebar);
});

// Testimonials modal functionality
const testimonialsItems = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

const toggleModal = function () {
  toggleActiveClass(modalContainer);
  toggleActiveClass(overlay);
};

testimonialsItems.forEach(item => {
  item.addEventListener("click", function () {
    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;
    toggleModal();
  });
});

modalCloseBtn.addEventListener("click", toggleModal);
overlay.addEventListener("click", toggleModal);

// Select and filter functionality
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtns = document.querySelectorAll("[data-filter-btn]");
const filterItems = document.querySelectorAll("[data-filter-item]");

select.addEventListener("click", function () {
  toggleActiveClass(this);
});

selectItems.forEach(item => {
  item.addEventListener("click", function () {
    const selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    toggleActiveClass(select);
    filterItemsByCategory(selectedValue);
  });
});

const filterItemsByCategory = function (category) {
  filterItems.forEach(item => {
    if (category === "all" || category === item.dataset.category) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
};

let lastClickedBtn = filterBtns[0];
filterBtns.forEach(btn => {
  btn.addEventListener("click", function () {
    const selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterItemsByCategory(selectedValue);
    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;
  });
});

// Form validation functionality
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

formInputs.forEach(input => {
  input.addEventListener("input", function () {
    form.checkValidity() ? formBtn.removeAttribute("disabled") : formBtn.setAttribute("disabled", "");
  });
});

// Navigation functionality
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

navigationLinks.forEach(link => {
  link.addEventListener("click", function () {
    const targetPage = this.innerHTML.toLowerCase();
    pages.forEach(page => {
      if (targetPage === page.dataset.page) {
        page.classList.add("active");
        link.classList.add("active");
        window.scrollTo(0, 0);
      } else {
        page.classList.remove("active");
        link.classList.remove("active");
      }
    });
  });
});

// Additional testimonials modal functionality
document.querySelectorAll(".testimonials-item").forEach(item => {
  item.addEventListener("click", function (event) {
    const currentItem = event.currentTarget;
    const title = currentItem.querySelector(".testimonials-item-title").textContent;
    const date = new Date(currentItem.getAttribute("data-testimonial-date")).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    const text = currentItem.querySelector(".testimonials-text p").textContent;
    const imgSrc = currentItem.querySelector("img").src;

    document.querySelector("[data-modal-title]").textContent = title;
    document.querySelector("[data-modal-date]").textContent = date;
    document.querySelector("[data-modal-text] p").textContent = text;
    document.querySelector("[data-modal-img]").src = imgSrc;
    document.querySelector(".modal-container").classList.add("active");
  });
});

document.querySelector("[data-modal-close-btn]").addEventListener("click", function () {
  document.querySelector(".modal-container").classList.remove("active");
});
