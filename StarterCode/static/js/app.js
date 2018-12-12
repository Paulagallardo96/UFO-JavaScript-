// from data.js
var tableData = data;

// YOUR CODE HERE!

var tbody = d3.select("tbody");

console.log(data);

tbody.html("");

data.forEach((UFOdata) => {
    var row = tbody.append("tr");
    Object.entries(UFOdata).forEach(([key, value]) => {
      var cell = tbody.append("td");
      cell.text(value);
    });
   });


// Select the submit button
var submit = d3.select("#submit");



submit.on("click", function() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");
 
  // Get the value property of the input element
  var inputValue = inputElement.property("value");
    
  console.log(inputValue);
  console.log(tableData);

  var filteredData = tableData.filter(UFO => UFO.datetime === inputValue);

  console.log(filteredData);

  // First, create an array with just the age values
//   var ages = filteredData.map(UFO => UFO.age);


  
  d3.select("tbody").selectAll("tr")
    .append("td").text(`${datetime}`)
    .append("td").text(`${city}`)
    .append("td").text(`${state}`)
    .append("td").text(`${country}`)
    .append("td").text(`${shape}`)
    .append("td").text(`${durationMinutes}`)
    .append("td").text(`${comments}`);

});

