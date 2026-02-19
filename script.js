const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

const techBoxes = document.querySelectorAll(".tech-box");

techBoxes.forEach((box) => {
  const color = box.getAttribute("data-color");
  box.style.background = `linear-gradient(135deg, ${color}CC 0%, ${color}99 100%)`;
});
