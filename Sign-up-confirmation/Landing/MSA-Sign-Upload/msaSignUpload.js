window.onload = function() {
  disableSubmitButton();

  var isMSAComplete = localStorage.getItem("msa");
  if (isMSAComplete !== "true") {
    localStorage.setItem("msa", "false");
  }

  if (document.getElementById("myfile").value == "") {
    localStorage.setItem("msa", "false");
  }

  if (document.getElementById("myfile").value != "") {
    localStorage.setItem("msa", "true");
    enableSubmitButton();
  } else {
    localStorage.setItem("msa", "false");
    disableSubmitButton();
  }
};

function setMSAKey() {
  localStorage.setItem("msa", "true");
}

function uploadFile() {
  if (document.getElementById("myfile").value != "") {
    enableSubmitButton();
  }
}

function disableSubmitButton() {
  document.getElementById("msa-submit").classList.add("not-active");
  document
    .getElementById("msa-submit")
    .childNodes[1].setAttribute("src", "../../images/arrow-right-disabled.png");
  document.getElementById("msa-submit").setAttribute("disabled", true);
}

function enableSubmitButton() {
  document.getElementById("msa-submit").classList.remove("not-active");
  document
    .getElementById("msa-submit")
    .childNodes[1].setAttribute("src", "../../images/arrow-right.png");
  document.getElementById("msa-submit").removeAttribute("disabled");
}

function printPDF() {
  window.frames["myFrame"].focus();
  window.frames["myFrame"].print();
}
