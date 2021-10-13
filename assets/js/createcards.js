var locationFormEl = document.querySelector("#locale-form");

var formSubmitHandler = function (event) {
  event.preventDefault();
  let destination = document.getElementById("locale").value;
  getSearchCoords(destination);
  console.log(destination);

}

locationFormEl.addEventListener("submit", formSubmitHandler);
