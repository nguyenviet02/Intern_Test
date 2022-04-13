function groupByLength(arr) {
  const result = {};
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    let length = item.length;
    if (result[length] === undefined) {
      result[length] = [];
    }
    result[length].push(item);
  }
  return result;
}

const arr = ["one", "two", "three", "four", "five"];
console.log(groupByLength(arr));