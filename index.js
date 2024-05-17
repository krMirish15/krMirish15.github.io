// Functionality for birthday page
document.addEventListener('DOMContentLoaded', function() {
    // When submit button clicked add a happy birthday message to the message element on the birthday page.
    document.querySelector("#submit_button").addEventListener('click', function(e) {
        const para = document.createElement("p");
        const node = document.createTextNode("Happy Birthday to " + document.querySelector("#name").value + " the " + document.querySelector("#pet").value);
        para.appendChild(node);
        const element = document.getElementById("message");
        element.appendChild(para);
        // Prevent default reloading
        e.preventDefault();
        });
    });
