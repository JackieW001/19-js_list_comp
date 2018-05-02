

// Track population for each age
var neutralPop = data.map(function(a) {
    return a.total;
});


// Total population

var totalPops = neutralPop.reduce(function(x, y){return x + y})

var tot_pop = document.createElement("h3")
tot_pop.appendChild(document.createTextNode("Total Population"));
document.body.appendChild(tot_pop);

var tot_pop_data = document.createElement("p")
tot_pop_data.appendChild(document.createTextNode(totalPops));
document.body.appendChild(tot_pop_data);
//console.log("Total population: " + totalPops);



// Average population across all ages

var average = totalPops / neutralPop.length;

var avg_pop = document.createElement("h3")
avg_pop.appendChild(document.createTextNode("Average Population"));
document.body.appendChild(avg_pop);

var avg_pop_data = document.createElement("p")
avg_pop_data.appendChild(document.createTextNode(average));
document.body.appendChild(avg_pop_data);
//console.log("Average population per age group: " + average);



// Filtering data based on key and value

var filter_data = function(ret_key, key, value){
    filtered = data.filter(function(x) {return x[key] > value;})
    return filtered.map(function(x) {return x[ret_key];})
};

var filtered = document.createElement("h3")
filtered.appendChild(document.createTextNode("Ages that have more than 2000000 Females"));
document.body.appendChild(filtered);

var filtered_data = document.createElement("p")
filtered_data.appendChild(document.createTextNode(filter_data("age", "females", 2000000)))
document.body.appendChild(filtered_data);


// Return ages with female count over 2000000
console.log(filter_data("age","females", 2000000))
