document.addEventListener("DOMContentLoaded", () => {
  const extraSection = document.getElementById("extra");
  const extraToggle = document.getElementById("extra-toggle");
  const collapsibleContent = extraSection.querySelector(".collapsible-content");

  const toggleExtra = (show) => {
    if (show === undefined) {
      extraSection.classList.toggle("is-open");
    } else if (show) {
      extraSection.classList.add("is-open");
    } else {
      extraSection.classList.remove("is-open");
    }

    // Dynamic height calculation for smooth transition
    if (extraSection.classList.contains("is-open")) {
      collapsibleContent.style.maxHeight = collapsibleContent.scrollHeight + "px";
    } else {
      collapsibleContent.style.maxHeight = "0px";
    }
  };

  extraToggle.addEventListener("click", () => toggleExtra());
});
