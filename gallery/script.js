document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");
  const modalTitle = document.getElementById("modal-title");
  const modalSubtitle = document.getElementById("modal-subtitle");
  const modalDescription = document.getElementById("modal-description");
  const closeModal = document.getElementById("close-modal");

  document.querySelectorAll(".gallery-item img").forEach((item) => {
    item.addEventListener("click", () => {
      modalImg.src = item.src;
      modalTitle.textContent = item.dataset.title;
      modalSubtitle.textContent = item.dataset.subtitle;
      modalDescription.textContent = item.dataset.description;
      modal.classList.remove("hidden");
    });
  });

  closeModal.addEventListener("click", () => {
    modal.classList.add("hidden");
  });

  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.classList.add("hidden");
    }
  });
});
