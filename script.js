function randomSearch() {
  var list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Example list, you can modify this as needed
  var target = parseInt(document.getElementById('target').value);

  if (isNaN(target)) {
    alert('Please enter a valid target value.');
    return;
  }

  var found = false;
  var result = '';
  var message = '';

  // Your loop here:


  result += "Done!";
  document.getElementById('result').innerHTML = result;
}