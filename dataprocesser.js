// Track population for each age
var neutralPop = data.map(function(a) {
    return a.total;
});

neutralPop;

// Total population

var totalPops = neutralPop.reduce(function(x, y){return x + y})

totalPops;

// Average population across all ages

var average = totalPops / neutralPop.length;

average;