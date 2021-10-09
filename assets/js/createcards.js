var locationFormEl = document.querySelector("#locale-form");

testDataChicago = {
	restaurant_name: "Tamale Foodie",
	restaurant_phone: "(312) 577-7014",
	restaurant_website: "",
	hours: "",
	price_range: "$$$$$",
	price_range_num: 5,
	restaurant_id: 4188276687636707,
	cuisines: ["Latin American", "Mexican", "Other"],
	address: {
		city: "Chicago",
		state: "IL",
		postal_code: "60612",
		street: "Location Varies",
		formatted: "Location Varies Chicago, IL 60612",
	},
}
  

var formSubmitHandler = function(event){
  event.preventDefault();

    var restaurant_name = testDataChicago.restaurant_name;
    var price_range = testDataChicago.price_range;

  // create a container for each repo
  var newEl = document.createElement("a");
  newEl.classList = "card";
  //newEl.setAttribute("href", "./single-repo.html?repo=" + repoName);
  document.getElementById("card-container").appendChild(newEl);
  // create a span element to hold repository name
  var resName = document.createElement("span");
  resName.textContent = restaurant_name;
  //console.log(restaurant_name)
  // append to container
  newEl.appendChild(resName);

  var price = document.createElement("span");
  price.textContent = price_range;
  //console.log(price_range);
  newEl.appendChild(price);




}

locationFormEl.addEventListener("submit", formSubmitHandler);