function loopyLighthouse (range, multiples, words){
  let start = range[0];
  let end = range[1];

  let multiple1 = multiples[0];
  let multiple2 = multiples[1];

  for (let i = start; i <= end; i++) {
    if (i % multiple1 === 0 && !(i % multiple2 === 0)) {
      console.log(words[0]);
    } else if (i % multiple2 === 0 && !(i % multiple1 === 0)) {
      console.log(words[1]);
    } else if (i % multiple1 === 0 && i % multiple2 === 0) {
      console.log(words[0] + words[1]);
    } else {
      console.log(i);
    }
  }
}

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);







/*function range(start, end, step) {
  var array = [0, 10, 2];
  var res = [];
  for (let i = start; i <= end; i += step) {
    res.push(i);
    console.log(i);
  }
  return res;
}*/