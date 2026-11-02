
function analyzePassword(password) {
    let score = 0;
    const feedback = [];

    // 1. Check password length
    if (password.length >= 8) {
        score++;
    } else {
        feedback.push("Use at least 8 characters.");
    }

    // 2. Check for uppercase letters
    if (/[A-Z]/.test(password)) {
        score++;
    } else {
        feedback.push("Add at least one uppercase letter.");
    }

    // 3. Check for lowercase letters
    if (/[a-z]/.test(password)) {
        score++;
    } else {
        feedback.push("Add at least one lowercase letter.");
    }

    // 4. Check for numbers
    if (/[0-9]/.test(password)) {
        score++;
    } else {
        feedback.push("Add at least one number.");
    }

    // 5. Check for special characters
    if (/[^A-Za-z0-9]/.test(password)) {
        score++;
    } else {
        feedback.push("Add at least one special character.");
    }

    return {
        score: score,
        feedback: feedback
    };
}

module.exports = analyzePassword;
