function getFormvalue(event) {
    event.preventDefault(); // This line stops the form from submitting normally
    var fname = document.querySelector('input[name="fname"]').value;
    var lname = document.querySelector('input[name="lname"]').value;
    alert(fname + " " + lname);
}

document.querySelector("#form1").addEventListener("submit", getFormvalue);