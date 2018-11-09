var from = 1;
var to = 100;

for (var current = from; current <= to; current++) {
  if (current % 3 === 0) {
    console.log('Fizz');
  } else{
    console.log(current);
  }
}