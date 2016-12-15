console.log('hello');

function renderCode(event) {
  const code = event.keyCode;
  const key = event.code;
  console.log('event', event);

  document.getElementById('code').innerHTML = code;
  document.getElementById('key').innerHTML = key;
}

window.addEventListener('keydown', renderCode);
