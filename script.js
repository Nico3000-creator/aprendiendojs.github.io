const clickableParagraphs = document.querySelectorAll(".clickable-paragraph");
const additionalTexts = document.querySelectorAll(".additional-text");

clickableParagraphs.forEach((paragraph, index) => {
  paragraph.addEventListener("click", () => {
    additionalTexts[index].style.display = additionalTexts[index].style.display === "none" ? "block" : "none";
  });
});