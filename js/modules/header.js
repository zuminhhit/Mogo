let _toggleBtn;
let _nav;
let _body;
let _header;

function headerToggleHamburger() {
  _toggleBtn = document.querySelector(".js-header-toggle");
  _nav = document.querySelector(".Header-nav");
  _body = document.body;

  if (!_toggleBtn || !_nav) return;

  _toggleBtn.addEventListener("click", () => {
    const isOpen = _toggleBtn.classList.toggle("is-open");

    _nav.classList.toggle("is-open");
    _body.classList.toggle("is-locked");

    _toggleBtn.setAttribute("aria-expanded", isOpen);
  });
}

function handleScrollHeader() {
  _header = document.querySelector(".Header");
  if (!_header) return;

  window.addEventListener("scroll", () => {
    _header.classList.toggle("is-scrolled", window.scrollY > 300);
  });
}

function processMenuHeader() {
  const menuContainer = document.querySelector(".Header-nav-menu");

  if (!menuContainer) return;

  menuContainer.addEventListener("click", (e) => {
    const targetLink = e.target.closest(".Header-nav-menu-item__link");

    if (targetLink) {
      const currentActive = menuContainer.querySelector(".is-active");
      if (currentActive) {
        currentActive.classList.remove("is-active");
      }

      targetLink.classList.add("is-active");
    }
  });
}

function resetNavMenu() {
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".js-reset-nav-menu")) return;

    document
      .querySelectorAll(".Header-nav-menu-item__link.is-active")
      .forEach((link) => link.classList.remove("is-active"));
  });
}

export default function initHeader() {
  headerToggleHamburger();
  handleScrollHeader();
  processMenuHeader();
  resetNavMenu();
}
