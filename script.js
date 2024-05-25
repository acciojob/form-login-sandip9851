document.querySelector("#form1").addEventListener("submit", function(event){
  event.preventDefault(); // This line stops the form from submitting normally
  let fname = document.querySelector('input[name="fname"]').value;
  let lname = document.querySelector('input[name="lname"]').value;
  alert(fname + " " + lname);
});