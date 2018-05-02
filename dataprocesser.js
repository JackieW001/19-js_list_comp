// Track population for each age
var neutralPop = data.map(function(a) {
    return a.total;
});

console.log("Population per age group");
console.log(neutralPop);

// Total population

var totalPops = neutralPop.reduce(function(x, y){return x + y})

console.log("Total population: " + totalPops);

// Average population across all ages

var average = totalPops / neutralPop.length;

console.log("Average population per age group: " + average);