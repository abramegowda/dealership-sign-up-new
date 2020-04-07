function expandItem(event, id) {
    console.log(event.target);
  if(document.getElementById(id).style.display == 'none') {
    document.getElementById(id).style.display = 'block';
    event.target.classList.add("rotate-arrow");
  } else {
    document.getElementById(id).style.display = 'none';
    event.target.classList.remove("rotate-arrow");
  }
}

