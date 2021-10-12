/* TACO LOCATOR JAVASCRIPT */

/* Global Variables */

// Constants for Documenu testing. Returns up to 30 results within 20 miles of Madison, WI city center
// let destination = "Chicago, IL";
const RANGE = 20;
const NUM_RESULTS = 30;
let savedSearches = [];

// HTML Elements
let tacoSearchFormEl = document.querySelector("#tacoSearchForm");
let searchInputEl = document.querySelector("#input");
let searchHistoryDropdownEl = document.querySelector("#searchDropdown");

// This flag designates whether using local test data or burning an API call
let useDocumenuTestData = true;
let useMapQuestTestData = true;

let searchSubmitHandler = (event) => {
	event.preventDefault();

	let location = searchInputEl.value.trim();

	if (location) {
		getSearchCoords(location);
	} else {
		searchInputEl.setAttribute("placeholder", "PLEASE ENTER A LOCATION TO SEARCH FOR YUMMY TACOS");
	}
};
tacoSearchFormEl.addEventListener("submit", searchSubmitHandler);

// Function to create static map from MapQuest API and put in HTML. Takes in restaurant results array from Documenu.
let createMap = (data) => {
	let staticMapAPI;
	if (useTestData) {
		staticMapAPI = "./assets/images/Test Data Map";
	} else {
		// Create a string for locations query parameter of MapQuest API from Documenu results JSON
		let locString = "";
		for (let i = 0; i < data.length; i++) {
			locString = locString.concat(data[i].geo.lat, ",", data[i].geo.lon);
			if (i < data.length - 1) {
				locString = locString.concat("||");
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
	if (useDocumenuTestData) {
		createMap(testDataChicago);
	} else {
		console.log(lat, lng);
		let documenuAPI = `https://documenu.p.rapidapi.com/restaurants/search/geo?lat=${lat}&lon=${lng}&distance=${RANGE}&size=${NUM_RESULTS}&page=2&fullmenu=true&cuisine=Mexican`;
		fetch(documenuAPI, {
			method: "GET",
			headers: {
				// "a7687a16eb8ef8a7cc7fce5518caad34" is burned. Should be ready by 10/15
				"x-api-key": "0d2c61c6b7a6aa25b5a19d6563af21ca",
				"x-rapidapi-host": "documenu.p.rapidapi.com",
				"x-rapidapi-key": "ef5d4d8b3amshd77a5cbfa217b59p18252bjsn98a33ecd6cc4",
			},
		})
			.then((response) => {
				if (response.ok) {
					response.json().then((data) => {
						createMap(data.data);
						console.log("You burned an API call!");
						console.log(data.data);
					});
				}
			})
			.catch((err) => {
				console.error(err);
			});
	}
};

// Make nested API calls to get weather data
let getSearchCoords = (loc) => {
	// Clear value from input field
	// destinationInputEl.value = "";

	if (useMapQuestTestData) {
		// Warning about fake data
		alert("This is currently only pulling internal test data an not using an API call (those are expensive).");
		console.log(testData);

		getTacoSpots("", "");
	} else {
		// API call to Mapquest to get latitude and longitude from generic place name
		let latLngSearchApiUrl = `https://open.mapquestapi.com/geocoding/v1/address?key=pmTncUmE4WZvotxffzMXoDh0tdUGP9Vc&location=${loc}`;
		fetch(latLngSearchApiUrl)
			.then((resp1) => {
				if (resp1.ok) {
					resp1.json().then((geoData) => {
						console.log("Geocode results:");
						console.dir(geoData);
						// Extract data from first result
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
							let locationStr = `${city}, ${state} ${country}`;

							// API call to Documenu using latitude and longitude
							getTacoSpots(lat, lng);

							savedSearches.unshift(locationStr);
							savedSearches = [...new Set(savedSearches)];

							while (savedSearches > 5) {
								savedSearches.pop;
							}

							updateSearchHistoryElements();

							localStorage.setItem("tacoSearches", JSON.stringify(savedSearches));
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

/* Search History Functions Start */

let updateSearchHistoryElements = () => {
	// Clear previous search items
	searchHistoryDropdownEl.innerHTML = "";

	// Loop over searchSavedSearches
	for (let item in savedSearches) {
		// Make the search button
		let searchButton = document.createElement("button");
		searchButton.setAttribute("class", "pure-menu-link");
		searchButton.setAttribute("data-search", savedSearches[item]);
		searchButton.innerHTML = savedSearches[item];

		// Make list item
		let listItem = document.createElement("li");
		listItem.setAttribute("class", "pure-menu-item");

		// Add list item to dropdown menu
		listItem.appendChild(searchButton);
		searchHistoryDropdownEl.appendChild(listItem);
	}
};

let loadLocalStorage = () => {
	// If there are searches in local storage, pull them into savedSearches
	let storedSearches = localStorage.getItem("tacoSearches");
	if (storedSearches) {
		savedSearches = JSON.parse(storedSearches);
	}
	updateSearchHistoryElements();
};
/* Search History Functions End */

loadLocalStorage();
// getSearchCoords(destination);

// Make it so searches save to local storage

function myFunction() {
	// Declare variables
	var input, filter, ul, li, a, i, txtValue;
	input = document.getElementById("myInput");
	filter = input.value.toUpperCase();
	ul = document.getElementById("myUL");
	li = ul.getElementsByTagName("li");

	// Loop through all list items, and hide those who don't match the search query
	for (i = 0; i < li.length; i++) {
		a = li[i].getElementsByTagName("a")[0];
		txtValue = a.textContent || a.innerText;
		if (txtValue.toUpperCase().indexOf(filter) > -1) {
			li[i].style.display = "";
		} else {
			li[i].style.display = "none";
		}
	}
}

// Make it so search history tab opens a dropdown list
// Make it so dropdown list is populated by localStorage
