function toggleMapFrame() {
  const header = document.querySelector("#Header");
  const openBtn = document.querySelector(".js-open-map");
  const modal = document.getElementById("mapModal");
  const dialog = modal.querySelector(".Map-modal-dialog");
  const closeBtn = modal.querySelector(".Map-modal__close");
  const iframe = modal.querySelector(".Map-modal-content__frame");

  openBtn.addEventListener("click", (e) => {
    e.preventDefault();
    header.classList.add("is-open-modal");
    modal.classList.add("is-open");
    document.body.classList.add("is-locked");
  });

  closeBtn.addEventListener("click", closeModal);

  modal.addEventListener("click", closeModal);

  dialog.addEventListener("click", (e) => {
    e.stopPropagation();
  });

  function closeModal() {
    header.classList.remove("is-open-modal");
    modal.classList.remove("is-open");
    document.body.classList.remove("is-locked");
  }
}

export default function initMap() {
  toggleMapFrame();
}
