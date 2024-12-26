document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Collect input values
    const fullname = document.getElementById("fullname").value;
    const email = document.getElementById("email").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const dob = document.getElementById("dob").value;
    const gender = document.getElementById("gender").value;

    // Check if all fields are filled
    if (fullname && email && username && password && dob && gender) {
        // Redirect to tasks.html if all fields are complete
        window.location.href = "Tasks.html";
    } else {
        alert("Please fill in all fields.");
    }
});
