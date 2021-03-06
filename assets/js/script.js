// Constants for Documenu testing. Returns up to 30 results within 20 miles of Madison, WI city center
const RANGE = 20; // Distance for documenu search
const NUM_RESULTS = 10; // Number of restaurant we request from API (max 30)
const NUM_SEARCH_HISTORY = 8; // Number of searches to store in the search history
const NUM_TACO_IMAGES = 19; // Number of taco#.jpgs stored in ./assets/images/

let savedSearches = []; // variable to hold searches from localStorage

// HTML Elements
let tacoSearchFormEl = document.querySelector("#tacoSearchForm");
let searchInputEl = document.querySelector("#input");
let searchHistoryDropdownEl = document.querySelector("#searchDropdown");
let resultsHeadlineEl = document.querySelector("#headline");
let cardContainerEl = document.querySelector("#card-container");
let mapEl = document.querySelector("#map");
// These flags designate whether using local test data or burning an API call
let useDocumenuTestData = false;
let useMapQuestTestData = false;

/* GLOBAL VARIABLES END
/* EVENT HANDLERS START */

// Handle Searches
let searchSubmitHandler = (event) => {
  event.preventDefault();
	clearMap();
  // Get the user input
  let location = searchInputEl.value.trim();

  // Validate user input
  if (location) {
    // If valid, continue
    getSearchCoords(location);
  } else {
    // In invalid, inform user
    searchInputEl.setAttribute(
      "placeholder",
      "PLEASE ENTER A LOCATION TO SEARCH FOR YUMMY TACOS"
    );
  }
};
// Create Event Listener for search form
tacoSearchFormEl.addEventListener("submit", searchSubmitHandler);

// Handle Search History
let historyClickHandler = (event) => {
  // Get the location from the search history item and continue
  let location = event.target.getAttribute("data-search");
  getSearchCoords(location);
};
// Create Event Listener for search history clicks
searchHistoryDropdownEl.addEventListener("click", historyClickHandler);

/* EVENT HANDLERS END */
/* MAIN FUNCTIONS START */

// Create static map from MapQuest API and put in HTML. Takes in restaurant results array from Documenu.
let createMap = (data) => {
  let staticMapAPI = "";

  // If testing
  if (useMapQuestTestData) {
    staticMapAPI = "./assets/images/Test Data Map";
  } else {
    // If not testing

    // Create a string for locations query parameter of MapQuest API from Documenu results JSON
    let locString = "";

    // Loop through restaurants and append their lat and long to the locations query parameter
    let numResults = Math.min(NUM_RESULTS, data.length);
    for (let i = 0; i < numResults; i++) {
      locString = locString.concat(data[i].geo.lat, ",", data[i].geo.lon);

      if (i < data.length - 1) {
        locString = locString.concat("||");
      }
    }

    // MapQuest Static Map API string
    staticMapAPI = `https://open.mapquestapi.com/staticmap/v5/map?locations=${locString}&defaultMarker=marker-sm-num&size=@2x&key=pmTncUmE4WZvotxffzMXoDh0tdUGP9Vc`;
  }

  // Add static map api string to HTML img tag
  mapImgEl = document.createElement("img");
  mapImgEl.setAttribute("src", staticMapAPI);
  mapImgEl.setAttribute("alt", "Map of taco locations nearby");
  mapImgEl.setAttribute("class", "map border");
	mapImgEl.setAttribute("id","#staticMap")
  mapEl.appendChild(mapImgEl);
};

// Create and display result cards
let createCards = (data) => {
  // Process the amount of results preferred and possible.
  let numResults = Math.min(NUM_RESULTS, data.length);

  // for loop to create NUM_RESULTS cards
  for (let i = 0; i < numResults; i++) {
    // Pull restaurant information from object
    let rName = data[i].restaurant_name;
    let pRange = data[i].price_range;
    let rAddress = data[i].address.formatted;
    let rPhone = data[i].restaurant_phone;
    let rWeb = data[i].restaurant_website;

    // create a card
    var newEl = document.createElement("div");
    newEl.classList = "card pure-u-md-10-24 border";
    cardContainerEl.appendChild(newEl);

    // create and append an h4 element to hold restaurant name
    let resName = document.createElement("h4");
    resName.textContent = rName;
    newEl.appendChild(resName);

    // create and append icons to show relative price
    let price = document.createElement("p");
    let pIcon = "<i class='fas fa-dollar-sign'></i>";
    let iconStr = "Price: " + pIcon;
    for (let i = 0; i < pRange.length; i++) {
      iconStr = iconStr + pIcon;
    }
    price.innerHTML = iconStr;
    newEl.appendChild(price);

    // create and append the restaurant address
    let resAddress = document.createElement("p");
    resAddress.textContent = rAddress;
    newEl.appendChild(resAddress);

    // create and append the restaurant phone number
    let resPhone = document.createElement("p");
    resPhone.textContent = rPhone;
    newEl.appendChild(resPhone);

    // create and append the restaurant website
    let resWeb = document.createElement("a");
    resWeb.href = rWeb;
    resWeb.textContent = rWeb;

    newEl.appendChild(resWeb);

    //create and append a taco image
    let img = document.createElement("img");
    const random = Math.floor(Math.random() * NUM_TACO_IMAGES) + 1;
    img.src = `./assets/images/taco${random}.jpg`;
    img.alt = "Delicious tacos";
    img.classList = "image";
    newEl.appendChild(img);
  }
};

// Documenu API call
let getTacoSpots = (lat, lng) => {
  // If testing
  if (useDocumenuTestData) {
    createCards(testData);
    createMap(testData);
  } else {
    // If not testing
    let documenuAPI = `https://documenu.p.rapidapi.com/restaurants/search/geo?lat=${lat}&lon=${lng}&distance=${RANGE}&size=${NUM_RESULTS}&page=2&fullmenu=true&cuisine=Mexican`;
    console.log(documenuAPI);
    // API Call
    fetch(documenuAPI, {
      method: "GET",
      headers: {
        //"x-api-key": "a7687a16eb8ef8a7cc7fce5518caad34", //TJ's Key 1 - Burned. Should be ready by 10/15
        "x-api-key": "0d2c61c6b7a6aa25b5a19d6563af21ca", // TJ's Key 2
        //"x-api-key": "354b61dc224075c82022d45737745317", // Melvin's Key
        //"x-api-key": "5d3b5e720097d9586cf58e94be339261", // Cristian's Key
        // "x-api-key": "4e6e62be3a4e1bd49904f6b7765e208b", // Victor's Key
        "x-rapidapi-host": "documenu.p.rapidapi.com",
        "x-rapidapi-key": "ef5d4d8b3amshd77a5cbfa217b59p18252bjsn98a33ecd6cc4",
      },
    })
      .then((response) => {
        if (response.ok) {
          response.json().then((data) => {
            console.log("getTacoSpots", data);
            console.log("You burned an API call!");
            if (!data.totalResults) {
              console.log("data is empty");
              resultsHeadlineEl.innerHTML =
                "Could not find a Taco place near there, so it's probably not worth being there.";
            } else {
              // Create map from the returned data
              createMap(data.data);
              createCards(data.data);
            }
          });
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }
};

// Save search history
let saveSearch = (locationStr) => {
  locationStr = locationStr.toUpperCase();
  // Add location to the saved searches array

  // Display location in headline
  resultsHeadlineEl.innerHTML = `<h3>Here are tacos near: ${locationStr}</h3>`;

  // Add location to the front of the search history array
  savedSearches.unshift(locationStr);
  // Create a set so there aren't duplicates
  savedSearches = [...new Set(savedSearches)];

  // Drop off the oldest searches
  while (savedSearches > NUM_SEARCH_HISTORY) {
    savedSearches.pop;
  }

  // Update UI
  updateSearchHistoryElements();

  // Update localStorage
  localStorage.setItem("tacoSearches", JSON.stringify(savedSearches));
};

// Make nested API calls to get weather data
let getSearchCoords = (loc) => {
  // Reset element values
  searchInputEl.value = "";
  resultsHeadlineEl.innerHTML = "";
  cardContainerEl.innerHTML = "";

  if (useMapQuestTestData) {
    // If testing

    // Send blank to Documenu API
    getTacoSpots("", "");

    // Add new location to search history
    saveSearch(loc);
  } else {
    // If not testing
    let latLngSearchApiUrl = `https://open.mapquestapi.com/geocoding/v1/address?key=pmTncUmE4WZvotxffzMXoDh0tdUGP9Vc&location=${loc}`;
    // API call to Mapquest to get latitude and longitude from generic place name
    fetch(latLngSearchApiUrl)
      .then((resp1) => {
        if (resp1.ok) {
          resp1.json().then((geoData) => {
            // Extract data from first result
            console.log("getSearchCoords", geoData);
            let lat = geoData.results[0].locations[0].latLng.lat;
            let lng = geoData.results[0].locations[0].latLng.lng;
            let city = geoData.results[0].locations[0].adminArea5;
            let state = geoData.results[0].locations[0].adminArea3;

            // Check that destination is specific enough to return a city, state and country identifier
            if (!city || !state) {
              // If not display a message in the results headline
              resultsHeadlineEl.innerHTML =
                "Your search may be too broad. Please enter more specific location information for results.";
            } else {
              // Create a city, state, country string for display and search history purposes
              let locationStr = loc;

              // Send latitude and longitude to Documenu API call
              getTacoSpots(lat, lng);

              // Add location to search history
              saveSearch(loc);
            }
          });
        }
      })
      .catch((error) => {
        console.log(error);
        resultsHeadlineEl.innerHTML =
          "There was an issue with getting your information. The data service might be down. Please check your internet connection and try again in a few minutes.";
      });
  }
};

// Update Search History UI
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

// If there are searches in local storage, pull them into savedSearches
let loadLocalStorage = () => {
  // Check localStorage and add to
  let storedSearches = localStorage.getItem("tacoSearches");
  if (storedSearches) {
    savedSearches = JSON.parse(storedSearches);
  }
  updateSearchHistoryElements();
};

let clearMap = () => {
	  // Remove the static map when search is invalid
		mapEl.innerHTML="";
}

/* MAIN FUNCTIONS END */

// initial page load
loadLocalStorage();
