function expandItem(event, id) {
  if (document.getElementById(id).style.display == "none") {
    document.getElementById(id).style.display = "block";
    event.target.classList.add("rotate-arrow");
  } else {
    document.getElementById(id).style.display = "none";
    event.target.classList.remove("rotate-arrow");
  }
}

window.onload = function() {
  var isReviewComplete = localStorage.getItem("review");
  if(isReviewComplete !== 'true') {
    localStorage.setItem("review", 'false');
  }
};

function setReviewKey() {
  localStorage.setItem("review", 'true');
}
