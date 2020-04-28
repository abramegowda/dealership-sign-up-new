window.onload = function() {
  disableSubmitButton();

  var isMSAComplete = localStorage.getItem("msa");
  if (isMSAComplete !== "true") {
    localStorage.setItem("msa", "false");
  }

  if (document.getElementById("myfile").value == "" || document.getElementById("fileElem").value == "") {
    localStorage.setItem("msa", "false");
  }

  if (document.getElementById("myfile").value != "" || document.getElementById("fileElem").value != "") {
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

function uploadFile(file) {
  previewFile(file)
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

// ************************ Drag and drop ***************** //
let dropArea = document.getElementById("drop-area");

// Prevent default drag behaviors
["dragenter", "dragover", "dragleave", "drop"].forEach((eventName) => {
  dropArea.addEventListener(eventName, preventDefaults, false);
  document.body.addEventListener(eventName, preventDefaults, false);
});

// Highlight drop area when item is dragged over it
["dragenter", "dragover"].forEach((eventName) => {
  dropArea.addEventListener(eventName, highlight, false);
});
["dragleave", "drop"].forEach((eventName) => {
  dropArea.addEventListener(eventName, unhighlight, false);
});

// Handle dropped files
dropArea.addEventListener("drop", handleDrop, false);

function preventDefaults(e) {
  e.preventDefault();
  e.stopPropagation();
}

function highlight(e) {
  dropArea.classList.add("highlight");
}

function unhighlight(e) {
  dropArea.classList.remove("highlight");
}

function handleDrop(e) {
  e.preventDefault();
  var file = e.dataTransfer.files[0];
  previewFile(file);
}

function previewFile(file) {
  document.getElementById("gallery").innerHTML = file.name;
  if (file) {
    enableSubmitButton();
  }
}
