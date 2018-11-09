var from = 1;
var to = 100;

for (var current = from; current <= to; current++) {
  var output = '';

  if (current % 3 === 0) {
    output = 'Fizz';
  }

  if (current % 5 === 0) {
    // すでにFizzが入ってる可能性があるので文字列結合する
    output += 'Buzz';
  }

  if (output === '') {
    output = current;
  }
  console.log(output);
}
