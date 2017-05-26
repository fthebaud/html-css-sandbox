document.querySelector('#start').addEventListener('click', start);
document.querySelector('#stop').addEventListener('click', stop);

let timeout = false;

function start() {
  const li = document.createElement('li');
  li.innerText = `[${new Date(Date.now()).toLocaleString()}] - a random message`;
  document.querySelector('#logsContainer').prepend(li);
  timeout = setTimeout(start, 200);
}

function stop() {
  clearTimeout(timeout);
}


document.querySelector('#clearButton').addEventListener('click', clear);
function clear() {
  const logContainer = document.querySelector('#logsContainer');
  // sub optimal ?
  while (logContainer.firstChild) {
    logContainer.removeChild(logContainer.firstChild);
  }
}