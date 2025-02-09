

 function login() {
    var a = document.getElementById("loginBtn");
    var b = document.getElementById("registerBtn");
    var x = document.getElementById("login");
    var y = document.getElementById("register");
    x.style.left = "4px";
    y.style.right = "-520px";
    a.className += " white-btn";
    b.className = "btn";
    x.style.opacity = 1;
    y.style.opacity = 0;
}
 
function register() {
    var a = document.getElementById("loginBtn");
    var b = document.getElementById("registerBtn");
    var x = document.getElementById("login");
    var y = document.getElementById("register");
    x.style.left = "-510px";
    y.style.right = "5px";
    a.className = "btn";
    b.className += " white-btn";
    x.style.opacity = 0;
    y.style.opacity = 1;
}

function loginValidation() {
    var username = document.getElementById("name").value;
    var password = document.getElementById("passwordLogin").value;

    if (username == "" || password == "") {
        alert("Please fill in all fields");
        return;
    }
    var validNameFormat = /^[a-zA-Z ]+$/; 
    if (!validNameFormat.test(username) ) {
        alert("Invalid name. Only letters and spaces are allowed.");
        return;
    }


    
    window.location.replace('home.html');

}


function registerValidation() {
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("passwordReg").value;

    
    console.log(firstname);
    console.log(lastname);
    console.log(email);
    console.log(password);
   
    

    if (firstname === "" || lastname === "" || email === "" || password === "") {
        alert("Please fill in all fields");
        return;
    }

    var validNameFormat = /^[a-zA-Z ]+$/;
    if (!validNameFormat.test(firstname) || !validNameFormat.test(lastname)) {
        alert("Invalid name. Only letters and spaces are allowed.");
        return;
    }

    
    var emailFormate = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailFormate.test(email)) {
        alert("Invalid email address");
        return;
    }
   
    window.location.replace('form.html');
}






 
     