// Constants for Documenu testing. Returns up to 30 results within 20 miles of Madison, WI city center
//let destination = document.getElementById("locale").value;
//console.log(destination);
const RANGE = 20;
const NUM_RESULTS = 5;

let tacos = [
  'assets/images/taco1.jpg',
  'assets/images/taco2.jpg',
  'assets/images/taco3.jpg',
  'assets/images/taco4.jpg',
  'assets/images/taco5.jpg'
]

// This flag designates whether using local test data or burning an API call
let useTestData = false;

// Function to create static map from MapQuest API and put in HTML. Takes in restaurant results array from Documenu.
let createMap = (data) => {
	let staticMapAPI;
	if (useTestData) {
		staticMapAPI = "./assets/images/Test Data Map";
	} else {
		// Create a string for locations query parameter of MapQuest API from Documenu results JSON
		let locString = "";
		console.log(data);
		for (let i = 0; i < data.length; i++) {
			locString = locString.concat(data[i].geo.lat, ",", data[i].geo.lon);
			console.log(locString);
			if (i < data.length - 1) {
				locString = locString.concat("||");
				console.log(locString);
			
			}
		}
		
		// MapQuest Static Map API string
			staticMapAPI = `https://open.mapquestapi.com/staticmap/v5/map?locations=${locString}&defaultMarker=marker-sm-num&size=@2x&key=pmTncUmE4WZvotxffzMXoDh0tdUGP9Vc`;
	}

	// Add static map api string to HTML img tag
	mapImgEl = document.querySelector("#map");
	mapImgEl.setAttribute("src", staticMapAPI);
	mapImgEl.setAttribute("alt", "Map of taco locations near");
	//TODO Error handling for API errors
};

// Documenu API call
let getTacoSpots = (lat, lng) => {
	// Check if testing or if doing API calls
	if (useTestData) {
		createMap(testData);
	} else {
		console.log(lat, lng);
		let documenuAPI = `https://documenu.p.rapidapi.com/restaurants/search/geo?lat=${lat}&lon=${lng}&distance=${RANGE}&size=${NUM_RESULTS}&page=1&fullmenu=true&cuisine=Mexican`;
		fetch(documenuAPI, {
			method: "GET",
			headers: {
				// "a7687a16eb8ef8a7cc7fce5518caad34" is burned. Should be ready by 10/15
				"x-api-key": "99621bf1c22adbf56a65f100a0017928",
				"x-rapidapi-host": "documenu.p.rapidapi.com",
				"x-rapidapi-key": "ef5d4d8b3amshd77a5cbfa217b59p18252bjsn98a33ecd6cc4",
			},
		})
			.then((response) => {
				if (response.ok) {
					response.json().then((data) => {
						console.log(data);
						createMap(data.data);
						console.log("You burned an API call!");
						console.log(data.data);
				
						// for loop to create 5 cards
						for (let i = 0; i < 5; i++) {
						let rName = data.data[i].restaurant_name;
						let pRange = data.data[i].price_range;
						
						// create a card
						var newEl = document.createElement("a1");
						newEl.classList = "card";
						document.getElementById("card-container").appendChild(newEl);
						// create a span element to hold restaurant name
						let resName = document.createElement("span");
						resName.classList = "form-cards"
						resName.textContent = rName;
					
						//console.log(restaurant_name)
						// append to card
						newEl.appendChild(resName);
					
						let price = document.createElement("span");
						price.textContent = pRange;
						//console.log(price_range);
						newEl.appendChild(price);
					
						//create image element
					
							
							let img = document.createElement("img");
							//const random = Math.floor(Math.random()* tacos.length); 
							//img.src = tacos[random]
							img.src = tacos[0];
							tacos.shift();
					
							img.classList = "image";
							//console.log(price_range);
							newEl.appendChild(img);
						}
					});
				}
			})
			.catch((err) => {
				console.error(err);
			});
	}
};

// Make nested API calls to get weather data
let getSearchCoords = (dest) => {
	// Clear value from input field
	// destinationInputEl.value = "";

	if (useTestData) {
		// Warning about fake data
		alert("This is currently only pulling internal test data an not using an API call (those are expensive).");
		console.log(testData);

		getTacoSpots("", "");
	} else {
		// API call to Mapquest to get latitude and longitude from generic place name
		let latLngSearchApiUrl = `https://open.mapquestapi.com/geocoding/v1/address?key=pmTncUmE4WZvotxffzMXoDh0tdUGP9Vc&location=${dest}`;
		fetch(latLngSearchApiUrl)
			.then((resp1) => {
				if (resp1.ok) {
					resp1.json().then((geoData) => {
						// Extract data from first result
						console.log(geoData);
						let lat = geoData.results[0].locations[0].latLng.lat;
						let lng = geoData.results[0].locations[0].latLng.lng;
						let city = geoData.results[0].locations[0].adminArea5;
						let state = geoData.results[0].locations[0].adminArea3;
						let country = geoData.results[0].locations[0].adminArea1;

						// Check that destination is specific enough to return a city, state and country identifier
						if (!city || !state || !country) {
							alert(
								"Your destination search may be too broad. Please enter more specific location information for results."
							);
						} else {
							// Create a city, state, country string for display and search history purposes
							let destinationStr = `${city}, ${state} ${country}`;

							// API call to Documenu using latitude and longitude
							getTacoSpots(lat, lng);
						}
					});
				}
			})
			.catch((error) => {
				console.log(error);
				alert(
					"There was an issue with getting your information. The data service might be down. Please check your internet connection and try again in a few minutes."
				);
			});
	}
};
