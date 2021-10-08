// Constants for Documenu testing. Returns up to 30 results within 20 miles of Madison, WI city center
const DEST_LAT = 43.0731;
const DEST_LNG = -89.4012;
const RANGE = 20;
const NUM_RESULTS = 30;

let documenuAPI = `https://documenu.p.rapidapi.com/restaurants/search/geo?lat=${DEST_LAT}&lon=${DEST_LNG}&distance=${RANGE}&size=${NUM_RESULTS}&page=2&fullmenu=true&cuisine=Mexican`;

// Function to create static map from MapQuest API and put in HTML. Takes in restaurant results array from Documenu.
let createMap = (data) => {
	// Create string for locations query parameter of MapQuest API from Documenu results JSON
	let locString = "";
	for (let i = 0; i < data.length; i++) {
		locString = locString.concat(data[i].geo.lat, ",", data[i].geo.lon);
		if (i < data.length - 1) {
			locString = locString.concat("||");
		}
	}
	// console.log(locString);

	// MapQuest Static Map API string
	let staticMapAPI = `https://open.mapquestapi.com/staticmap/v5/map?locations=${locString}&size=@2x&key=pmTncUmE4WZvotxffzMXoDh0tdUGP9Vc`;

	// Add static map api string to HTML img tag
	mapImgEl = document.querySelector("#map");
	mapImgEl.setAttribute("src", staticMapAPI);
	mapImgEl.setAttribute("alt", "Map of taco locations near");
	//TODO Error handling for API errors
};

// Documenu API call
fetch(documenuAPI, {
	method: "GET",
	headers: {
		"x-api-key": "a7687a16eb8ef8a7cc7fce5518caad34",
		"x-rapidapi-host": "documenu.p.rapidapi.com",
		"x-rapidapi-key": "ef5d4d8b3amshd77a5cbfa217b59p18252bjsn98a33ecd6cc4",
	},
})
	.then((response) => {
		if (response.ok) {
			response.json().then((data) => {
				createMap(data.data);

				console.log(data.data);
			});
		}
	})
	.catch((err) => {
		console.error(err);
	});
