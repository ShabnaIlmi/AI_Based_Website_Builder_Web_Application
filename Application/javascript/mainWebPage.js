document.addEventListener('DOMContentLoaded', function() {
    var navLinks = document.querySelectorAll('nav ul li a');
    var currentUrl = window.location.href;

    navLinks.forEach(function(link) {
        if (link.href === currentUrl) {
            link.classList.add('current-page');
        }
    });
});

function showPopup(fname, lname, email, queryTheme, queryDetails) {
    // Displaying the HTML popup with the summary
    let modal = document.getElementById('popupModal');
    let summary = `
        <p><strong>First Name:</strong> ${fname}</p>
        <p><strong>Last Name:</strong> ${lname}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Query Theme:</strong> ${queryTheme}</p>
        <p><strong>Query Details:</strong> ${queryDetails}</p>
    `;
    document.getElementById('summaryContent').innerHTML = summary;
    modal.style.display = 'block';

    let closeButton = modal.querySelector('.close');
    closeButton.onclick = function() {
        modal.style.display = 'none';
    };


    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
}

document.getElementById('queryForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Validating the form
    var fname = document.getElementById('fname').value.trim();
    var lname = document.getElementById('lname').value.trim();
    var email = document.getElementById('email').value.trim();
    var queryTheme = document.getElementById('queryTheme').value;
    var queryDetails = document.getElementById('queryDetails').value.trim();

    if (!fname || !lname || !email || !queryTheme || !queryDetails) {
        alert("Please fill in all required fields.");
        return;
    }

    //Email validation
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }


    document.getElementById('loading').style.display = 'block';

    
    setTimeout(function() {
        
        document.getElementById('loading').style.display = 'none';

        
        document.getElementById('confirmation').style.display = 'block';

        
        document.getElementById('additionalMessage').style.display = 'block';

        
        showPopup(fname, lname, email, queryTheme, queryDetails);

        
        document.getElementById('queryForm').reset();

        setTimeout(function() {
            document.getElementById('confirmation').style.display = 'none';
            document.getElementById('additionalMessage').style.display = 'none';
        }, 5000);
    }, 2000);
});
