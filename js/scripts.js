document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting

    // Hardcoded username and password for Nandita
    const correctUsername = "CocoaClimber";
    const correctPassword = "nandita";

    // Get entered username and password
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check if username and password match
    if (username === correctUsername && password === correctPassword) {
        // Redirect to the main home page
        window.location.href = "index.html";
    } else {
        // Show error message
        document.getElementById('error-message').style.display = 'block';
    }
});

