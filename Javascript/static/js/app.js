// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

function generateData(data){
    tbody.text("")
    data.forEach(function(sighting){
        new_row = tbody.append("tr")
        Object.entries(sighting).forEach(function([key, value]){
            new_cell = new_row.append("td").text(value)
        })
    })
}

//generate data goes here
generateData(tableData);


// // next thing
// // select buttons for filtering
// var button = d3.select("filter-btn");


// // button.on("click", function() {
// //     var inputElement = d3.select("#datetime");
    

// //     console.log(inputElement.property("value"));

// //     var filtered_table = tableData.filter(sighting => sighting.datetime===inputElement.property("value"));

// //     generateData(filtered_table);

// // })

// function doShit () {
//         var new_table = tableData.filter(sighting => sighting.datetime===inputDate.property("value"));
//         generateData(new_table);
//     }


//BONUS STUFF BELOW. KINDA DIDN'T WORK

var filterButton = d3.select("#filter-btn");

filterButton.on("click", function() {
    console.log("you are clicking the button");


    var inputDate = d3.select("#datetime");
    var inputCity = d3.select("#city");
    var inputState = d3.select("#state");
    var inputCountry = d3.select("#country");
    var inputShape = d3.select("#shape");

    console.log(inputDate.property("value"));
    console.log(inputCity.property("value"));
    console.log(inputState.property("value"));
    console.log(inputCountry.property("value"));
    console.log(inputShape.property("value"));


    var filtered = tableData.filter(sighting => {
        return (sighting.datetime===inputDate.property("value") || !inputDate.property("value")) &&
                    (sighting.city===inputCity.property("value") || !inputCity.property("value")) &&
                    (sighting.state==inputState.property("value") || !inputState.property("value")) &&
                    (sighting.country==inputCountry.property("value") || !inputCountry.property("value")) &&
                    (sighting.shape==inputShape.property("value") || !inputShape.property("value"))

    })

    generateData(filtered);

});
