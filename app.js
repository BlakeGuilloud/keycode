console.log('hello');

function renderCode(event) {
  const code = event.keyCode;

  document.getElementById('root').innerHTML = code;
}

window.addEventListener('keydown', renderCode);
