function display(val) {
  document.getElementById('result').value += val

  return val
}

function solve() {
  let getResult = document.getElementById('result').value

  let evaluate = eval(getResult);

  document.getElementById('result').value = evaluate

  return evaluate
}

function clearScreen() {
  document.getElementById('result').value = ""
}