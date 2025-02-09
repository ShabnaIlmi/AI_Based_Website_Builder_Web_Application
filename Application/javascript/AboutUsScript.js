function showDetails(id) {
  document.getElementById(id).style.display = 'block';
}

function hideDetails(id) {
  document.getElementById(id).style.display = 'none';
}

function changeFontSize(size) {
  const body = document.body;
  if (size === 'smaller') {
    body.classList.add('font-smaller');
    body.classList.remove('font-larger');
  } else {
    body.classList.add('font-larger');
    body.classList.remove('font-smaller');
  }
}
