// measure time taken by a function

function measureTime(func) {
  const start = Date.now();
  func();
  const end = Date.now();
  console.log(`Time taken: ${end - start}ms`);
}

export default measureTime;
