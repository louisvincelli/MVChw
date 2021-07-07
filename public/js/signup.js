async function signup(event) {
    event.preventDefault();
    const usernameElement = document.querySelector('#username-signup');
    const passwordElement = document.querySelector('#password-signup');

    const res = await fetch('/api/user', {
        method: 'POST',
        body: JSON.stringify({
            username: usernameElement.value,
            password: passwordElement.value,
        }),
        headers: {'Content-Type': 'application/json'}
    });
    if(res.ok) {
        document.location.replace('/dashboard')
    } else {
        alert('Failed to Sign up!');
    }
};

document.querySelector('#signupbtn').addEventListener('click', signup);