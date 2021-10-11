var container = document.createElement('div');
container.classList.add("container")

// first part is initializer, where you start
// second part is where you stop
// third part is how much you want to increment in between each loop
for (var i = 0; i < 2; i++) {
  var row = document.createElement('div');
  row.classList.add("row")
  for (var j = 0; j < 3; j++) {
    var col = document.createElement('div');
    col.classList.add("col")
    row.append(col)
  }
  container.append(row)
}

document.body.append(container)

var arr = ['dog', 'cat', 'chicken']

var amountOfCards;
if (arr.length < 5) {
  amountOfCards = arr.length
} else {
  amountOfCards = 5
}
for (var i = 0; i < amountOfCards; i++) {
  console.log(arr[i])
}

fetch(apiUrl)
.then(function(response) {
  return response.json()
})
.then(function(data) {
  for (var i = 0; i< data.length;i++) {
    document.getElementById('something').textContent = data[i].name
  }
})