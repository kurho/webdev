function toggleForm(formId) {
    const loginForm = document.getElementById('login');
    const signupForm = document.getElementById('signup');

    if (formId === 'signup') {
        loginForm.classList.remove('active');
        signupForm.classList.add('active');
    } else if (formId === 'login') {
        signupForm.classList.remove('active');
        loginForm.classList.add('active');
    }
}
