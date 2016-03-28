// 'map' using reduce - a transformation to each value in the array

var data = [1,2,3];
var doubled = data.reduce(function(acc, value) {
  acc.push(value * 2);
  return acc;
}, []);

console.log("Doubled data (using reduce):", doubled);

// same as using map ...

var doubledMapped = data.map(function(item) {
  return item * 2;
});

console.log("Doubled data (using map):", doubledMapped);

// 'filter' using reduce

var data2 = [1, 2, 3, 4, 5, 6];

var evens = data2.reduce(function(acc, value) {
  if (value % 2 === 0) {
    acc.push(value);
  }
  return acc;
}, []);

console.log("Evens (using reduce)", evens);

// same as using filter ...

var evenFiltered = data2.filter(function(item) {
  return (item % 2 === 0);
});

console.log("Evens (using filter)", evenFiltered);

// filter and map are composable

var filterMapped = data2.filter(function(value) {
  return value % 2 === 0;
}).map(function(value) {
  return value * 2;
});

console.log("filterMapped:", filterMapped);

// compare time for a large arrays

var bigData = [];
for (var i = 0; i < 1000000; i++) {
  bigData[i] = i;
}

console.time('bigData');
var filterMapped = bigData.filter(function(value) {
  return value % 2 === 0;
}).map(function(value) {
  return value * 2;
}); // runs 1000000 times to filter and 500000 times to map
console.log('Time to run with composing filter & map ...')
console.timeEnd('bigData');

// same logic using the reduce function
console.time('bigData');
var reducedBigData = bigData.reduce(function(acc, value) {
  if (value % 2 === 0) {
    acc.push(value * 2);
  }
  return acc;
}, []);
console.log('Time to run with reduce ...')
console.timeEnd('bigData')

// reduce iterates over the million items once rather
// than constantly iterating over the same data set.
