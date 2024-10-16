document.addEventListener('DOMContentLoaded', () => {
    const loginModal = document.getElementById('loginModal');
    const signupModal = document.getElementById('signupModal');
    const loginButton = document.querySelector('nav button.flex.items-center'); // Login tugmasini to'g'ri tanlaymiz
    const openSignupButton = document.getElementById('openSignup');
    const backToLoginButton = document.getElementById('backToLogin');

    // Open login modal
    loginButton.addEventListener('click', () => {
        loginModal.classList.remove('hidden');
    });

    // Switch to signup modal
    openSignupButton.addEventListener('click', () => {
        loginModal.classList.add('hidden');
        signupModal.classList.remove('hidden');
    });

    // Switch back to login modal
    backToLoginButton.addEventListener('click', () => {
        signupModal.classList.add('hidden');
        loginModal.classList.remove('hidden');
    });

    // Close modals when clicking outside
    window.addEventListener('click', (event) => {
        if (event.target === loginModal) {
            loginModal.classList.add('hidden');
        }
        if (event.target === signupModal) {
            signupModal.classList.add('hidden');
        }
    });
});