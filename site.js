const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const progress = document.getElementById("progress");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const expanded = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!expanded));
    navLinks.classList.toggle("open");
  });

  document.addEventListener("click", (event) => {
    if (!navLinks.classList.contains("open")) {
      return;
    }

    if (navLinks.contains(event.target) || navToggle.contains(event.target)) {
      return;
    }

    navLinks.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
}

const updateProgress = () => {
  if (!progress) {
    return;
  }

  const scrollTop = window.scrollY;
  const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
  progress.max = 100;
  progress.value = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
};

window.addEventListener("load", updateProgress);
window.addEventListener("scroll", updateProgress, { passive: true });
