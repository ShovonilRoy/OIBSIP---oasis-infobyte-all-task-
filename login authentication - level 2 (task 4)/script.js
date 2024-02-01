    var users = [
        { username: "user1", password: "password1", email: "user1@example.com" },
        { username: "user2", password: "password2", email: "user2@example.com" }
    ];

    document.getElementById('login').addEventListener('submit', function(event) {
        event.preventDefault(); 
        var username = document.getElementById('loginUsername').value;
        var password = document.getElementById('loginPassword').value;
        var user = users.find(function(user) {
            return user.username === username && user.password === password;
        });
        if (user) {
            alert('Login Successful!\nWelcome back, ' + username + '!');
        } else {
            alert('Invalid username or password.');
        }
    });

    document.getElementById('registration').addEventListener('submit', function(event) {
        event.preventDefault();
        var username = document.getElementById('regUsername').value;
        var password = document.getElementById('regPassword').value;
        var email = document.getElementById('regEmail').value;
        var existingUser = users.find(function(user) {
            return user.username === username || user.email === email;
        });
        if (existingUser) {
            if (existingUser.username === username) {
                alert('This username is already taken. Please choose a different one.');
            } else if (existingUser.email === email) {
                alert('This email address is already registered. Please use a different one.');
            }
        } else {
            users.push({ username: username, password: password, email: email });
            alert('Registration Successful!\nWelcome, ' + username + '!');
        }
    });

    function toggleForms() {
        var loginForm = document.getElementById('loginForm');
        var regForm = document.getElementById('registrationForm');
        if (loginForm.style.display === 'none') {
            loginForm.style.display = 'block';
            regForm.style.display = 'none';
        } else {
            loginForm.style.display = 'none';
            regForm.style.display = 'block';
        }
    }
