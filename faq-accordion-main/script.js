document.querySelectorAll(".switch").forEach(image => {
  image.addEventListener("click", () => {
    const answerEl = document.getElementById(
      image.dataset.target
    )
    answerEl.hidden = !answerEl.hidden
    image.src = answerEl.hidden
      ? "assets/images/icon-plus.svg"
      : "assets/images/icon-minus.svg"
  })
})