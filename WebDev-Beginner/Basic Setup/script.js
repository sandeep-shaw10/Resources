//Basic Popup

if(confirm("Do you want to continue")){
    alert("Welcome to Web Devlopment")
}
else{
    alert("You click to cancel")
}


let person = prompt("Please enter your name", "Harry Potter");
let text;

//Condition First Way
if (person == null || person == "") {
    text = "Stranger"
}
else {
    text = person
}

//Condition Other Way
text = (person == null || person == "")? "Stranger": person;


document.getElementById("putName").innerHTML = `Welcome ${text}`