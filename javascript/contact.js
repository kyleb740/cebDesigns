// Callback for the Modal
var modal = document.getElementById('jsModal');

// Callback for the button that gets the modal
var formbtn = document.getElementById("formBtn");

// Closing element
var close = document.getElementsByClassName("close")[0];

// When button clicked open Modal
formbtn.onclick = function() {
    modal.style.display = "block";
}

// When x clicked close the modal
close.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
