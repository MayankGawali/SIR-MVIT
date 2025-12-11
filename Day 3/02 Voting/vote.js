function vote(){
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var par = document.getElementById("par");

    if (age>=18) {
        // alert("You are Eligible to Vote 👍🏻")
        par.innerHTML = "You are Eligible to Vote 👍🏻"
    } else {
        // alert("You are still a minor 🤌🏻")
        par.innerHTML = "You are still a minor 🤌🏻"
    }
}