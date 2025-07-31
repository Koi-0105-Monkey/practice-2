document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("navMenu");
  const authMenu = document.getElementById("authMenu");
  const overlay = document.getElementById("menuOverlay");

  const toggleMenu = () => {
    navMenu.classList.toggle("show");
    authMenu.classList.toggle("show");
    overlay.classList.toggle("show");
  };

  const closeMenu = () => {
    navMenu.classList.remove("show");
    authMenu.classList.remove("show");
    overlay.classList.remove("show");
  };

  hamburger.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleMenu();
  });

  overlay.addEventListener("click", () => {
    closeMenu();
  });

  document.addEventListener("click", (e) => {
    if (
      !hamburger.contains(e.target) &&
      !navMenu.contains(e.target) &&
      !authMenu.contains(e.target)
    ) {
      closeMenu();
    }
  });

  const closeTargets = document.querySelectorAll("#navMenu a, #authMenu a, #authMenu button");
  closeTargets.forEach((el) =>
    el.addEventListener("click", () => {
      closeMenu();
    })
  );
});
