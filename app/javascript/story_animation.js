document.addEventListener("turbo:load", () => {
  const elements = document.querySelectorAll(
    ".story-section, .story-transition, .story-final"
  );

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, {
    threshold: 0.15
  });

  elements.forEach((element) => {
    observer.observe(element);
  });
}); 