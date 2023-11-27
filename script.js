function randomSearch() {
  var list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  var target = parseInt(document.getElementById('target').value);

  if (isNaN(target)) {
    alert('Please enter a valid target value.');
    return;
  }

  [found, result] = randomSearch_1(list, target)

  result += "Done!";
  document.getElementById('result').innerHTML = result;
}

// complete this function
function randomSearch_1(myList, target) {

}