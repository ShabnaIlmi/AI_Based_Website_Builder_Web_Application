function formSubmit(event) {
  event.preventDefault();

    var age = document.getElementById("age").value;
    var gender = document.getElementById("gender").value;
    var industry = document.getElementById("industry").value;
    var jobFunction = document.getElementById("job-function").value;

    if (age === "") {
        alert("Please enter your age");
        
    }
    if (isNaN(age)) {
      alert("Please enter a valid age");
      return false;
    }

    if (parseInt(age) > 150 || parseInt(age) < 10 ) {
      alert("Age should not be more than 150 or less than 10");
      return false;
    }

    if (gender === "") {
        alert("Please select your gender");
      return false;
    }

    if (industry === "") {
        alert("Please select an industry");
      return false;
    }

    if (jobFunction === "") {
        alert("Please select your occupation");
      return false;
    }

    alert("the recomended result will show in a while")


    window.location.href = "mainWebPage.html";
    
}


