document.querySelectorAll(".category").forEach((category) => {
  const content = category.querySelector(".category-content");

  content.style.display = "none";

  category.addEventListener("mouseenter", () => {
    content.style.display = "flex";
  });

  category.addEventListener("mouseleave", () => {
    content.style.display = "none";
  });
});