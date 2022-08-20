const count = document.querySelector(".current-count");
const btns = document.querySelectorAll(".btn");
let countNumber = 0;

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const styles = e.currentTarget.classList;

    if (styles.contains("dec-btn")) {
      --countNumber;
    } else if (styles.contains("res-btn")) {
      countNumber = 0;
    } else if (styles.contains("inc-btn")) {
      ++countNumber;
    }
    if (countNumber > 0) {
      count.style.color = "green";
    }
    if (countNumber < 0) {
      count.style.color = "red";
    }
    if (countNumber === 0) {
      count.style.color = "black";
    }
    count.textContent = countNumber;
  });
});
