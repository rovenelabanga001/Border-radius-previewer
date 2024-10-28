document.addEventListener("DOMContentLoaded", function () {
  const formElement = document.getElementById("input-form");
  const elementDiv = document.getElementById("element");

  formElement.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log(e.target);
    //get the inputs value
    const topLeftValue = document.getElementById("top-left-input").value;
    const topRightValue = document.getElementById("top-right-input").value;
    const bottomLeftValue = document.getElementById("bottom-left-input").value;
    const bottomRightValue =
      document.getElementById("bottom-right-input").value;

    elementDiv.style.borderTopLeftRadius = `${topLeftValue}px`;
    elementDiv.style.borderTopRightRadius = `${topRightValue}px`;
    elementDiv.style.borderBottomLeftRadius = `${bottomLeftValue}px`;
    elementDiv.style.borderBottomRightRadius = `${bottomRightValue}px`;
  });
});
