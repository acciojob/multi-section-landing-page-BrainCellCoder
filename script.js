document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const feedback = document.getElementById('formFeedback');

    form.addEventListener('submit', (e) => {
        feedback.textContent = '';

        const fullName = document.getElementById('fullName').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const message = document.getElementById('message').value.trim();

        let isValid = true;

        if (!fullName) {
            feedback.textContent += 'Full Name is required.\n';
            isValid = false;
        }

        if (!email || !validateEmail(email)) {
            feedback.textContent += 'A valid Email Address is required.\n';
            isValid = false;
        }

        if (phone && !validatePhone(phone)) {
            feedback.textContent += 'Phone Number must be in the format: 123-456-7890.\n';
            isValid = false;
        }

        if (message.length < 100) {
            feedback.textContent += 'Message must be at least 100 characters long.\n';
            isValid = false;
        }

        if (!isValid) {
            e.preventDefault();
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function validatePhone(phone) {
        const re = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
        return re.test(phone);
    }
});
