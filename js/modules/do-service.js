function initDoServiceAccordion() {
  const items = document.querySelectorAll(".DoService-content-accordion-item");
  if (!items.length) return;

  items.forEach((item) => {
    const header = item.querySelector(
      ".DoService-content-accordion-item-header",
    );

    header.addEventListener("click", () => {
      const isOpen = item.classList.contains("is-active");

      items.forEach((i) => i.classList.remove("is-active"));

      if (!isOpen) {
        item.classList.add("is-active");

        const scrollBox = item.querySelector(
          ".DoService-content-accordion-item-desc__scroll",
        );
        if (scrollBox) {
          scrollBox.scrollTop = 0;
        }
      }
    });
  });

  if (items[0]) items[0].classList.add("is-active");
}

export default function initDoService() {
  initDoServiceAccordion();
}
