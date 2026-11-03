
function analyzePassword(password) {
    let score = 0;
    const feedback = [];

    // 1. Check password length
    const length = password.length >= 8;
    if (length) {
        score++;
    } else {
        feedback.push("Use at least 8 characters.");
    }

    // 2. Check for uppercase letters
    const uppercase = /[A-Z]/.test(password);
    if (uppercase) {
        score++;
    } else {
        feedback.push("Add at least one uppercase letter.");
    }

    // 3. Check for lowercase letters
    const lowercase = /[a-z]/.test(password);
    if (lowercase) {
        score++;
    } else {
        feedback.push("Add at least one lowercase letter.");
    }

    // 4. Check for numbers
    const number = /[0-9]/.test(password);
    if (number) {
        score++;
    } else {
        feedback.push("Add at least one number.");
    }

    // 5. Check for special characters
    const specialChar = /[^A-Za-z0-9]/.test(password);
    if (specialChar) {
        score++;
    } else {
        feedback.push("Add at least one special character.");
    }

    return {
        score: score,
        feedback: feedback,
        length: length,
        uppercase: uppercase,
        lowercase: lowercase,
        number: number,
        specialChar: specialChar
    };
}

module.exports = analyzePassword;
