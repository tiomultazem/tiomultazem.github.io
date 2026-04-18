document.addEventListener("DOMContentLoaded", () => {
  const langToggleBtn = document.getElementById("lang-toggle");
  const toggleLabel = langToggleBtn.querySelector(".toggle-label");
  const body = document.body;

  // Cek apakah ada preferensi bahasa di localStorage
  const currentLang = localStorage.getItem("lang") || "en";
  body.setAttribute("data-lang", currentLang);
  toggleLabel.textContent = currentLang === "en" ? "EN" : "ID";

  langToggleBtn.addEventListener("click", () => {
    const isEn = body.getAttribute("data-lang") === "en";
    const newLang = isEn ? "id" : "en";
    
    body.setAttribute("data-lang", newLang);
    localStorage.setItem("lang", newLang);
    
    // Ubah teks tombolnya
    toggleLabel.textContent = newLang === "en" ? "EN" : "ID";
  });
});
