function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function range(start, end, step) {
  return Array.from({ length: Math.floor((end - start) / step) + 1 }, (_, index) => start + index * step);
}

function randomSearch() {
  var list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  var target = parseInt(document.getElementById('target').value);

  if (isNaN(target)) {
    alert('Please enter a valid target value.');
    return;
  }

  [found, result] = randomSearch_1(list, target);
  // [found, result] = randomSearch_2(list, target);

  result += "Done! Found = " + found;
  document.getElementById('result').innerHTML = result;
}

// complete this function
function randomSearch_1(myList, target) {
}

// complete this function
function randomSearch_2(myList, target) {
}

