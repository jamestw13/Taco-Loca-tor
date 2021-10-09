var locationFormEl = document.querySelector("#locale-form");

let tacos = [
  'assets/images/taco1.jpg',
  'assets/images/taco2.jpg',
  'assets/images/taco3.jpg',
  'assets/images/taco4.jpg',
  'assets/images/taco5.jpg'
]
console.log(tacos)
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


var formSubmitHandler = function (event) {
  event.preventDefault();
  let destination = document.getElementById("locale").value;
  getSearchCoords(destination);
  console.log(destination);
  var restaurant_name = testDataChicago.restaurant_name;
  var price_range = testDataChicago.price_range;

  //Create for loop to iterate through fetch call 5 times 
  // Parse data into the cards


  // create a card
  var newEl = document.createElement("a1");
  newEl.classList = "card";
  document.getElementById("card-container").appendChild(newEl);
  // create a span element to hold restaurant name
  var resName = document.createElement("span");
  resName.classList = "form-cards"
  resName.textContent = restaurant_name;

  //console.log(restaurant_name)
  // append to card
  newEl.appendChild(resName);

  var price = document.createElement("span");
  price.textContent = price_range;
  //console.log(price_range);
  newEl.appendChild(price);

  //create image element

    
    var img = document.createElement("img");
    //const random = Math.floor(Math.random()* tacos.length); 
    //img.src = tacos[random]
    img.src = tacos[0];
    tacos.shift();

    img.classList = "image";
    //console.log(price_range);
    newEl.appendChild(img);

}

locationFormEl.addEventListener("submit", formSubmitHandler);