var count = 0;

function makeCounter() {
  var count = 10;

  function increment() {
    count++;
    console.log(count);
  }

  function reset() {
    count = 0;
    console.log("Reset:", count);
  }

  return { increment, reset };
}

const counter = makeCounter();

counter.increment(); // 11
counter.increment(); // 12
counter.reset(); // Reset: 0
counter.increment(); // 1
console.log(count); // 0
