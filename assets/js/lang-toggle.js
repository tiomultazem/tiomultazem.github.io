document.addEventListener("DOMContentLoaded", () => {
  const langToggleBtn = document.getElementById("lang-toggle");
  const toggleLabel = langToggleBtn.querySelector(".toggle-label");
  const body = document.body;

  const languages = ["en", "id", "ar"];
  const labels = { "en": "EN", "id": "ID", "ar": "AR" };

  // Init from localStorage
  let currentLang = localStorage.getItem("lang") || "en";
  if (!languages.includes(currentLang)) currentLang = "en";

  body.setAttribute("data-lang", currentLang);
  toggleLabel.textContent = labels[currentLang];

  langToggleBtn.addEventListener("click", () => {
    const currentIndex = languages.indexOf(body.getAttribute("data-lang"));
    const nextIndex = (currentIndex + 1) % languages.length;
    const newLang = languages[nextIndex];

    body.setAttribute("data-lang", newLang);
    localStorage.setItem("lang", newLang);
    toggleLabel.textContent = labels[newLang];
  });
});
