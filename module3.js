function displayPasswordStrength(results) {
    let score = 0;

    if (results.length) score++;
    if (results.uppercase) score++;
    if (results.lowercase) score++;
    if (results.number) score++;
    if (results.specialChar) score++;

    let strength;

    if (score <= 2) {
        strength = "Weak";
    } else if (score <= 4) {
        strength = "Medium";
    } else {
        strength = "Strong";
    }

    const tips = [];

    if (!results.length) {
        tips.push("Use at least 8 characters.");
    }

    if (!results.uppercase) {
        tips.push("Add at least one uppercase letter (A-Z).");
    }

    if (!results.lowercase) {
        tips.push("Add at least one lowercase letter (a-z).");
    }

    if (!results.number) {
        tips.push("Add at least one number (0-9).");
    }

    if (!results.specialChar) {
        tips.push("Add at least one special character (!, @, #...).");
    }

    return {
        strength: strength,
        tips: tips
    };
}

module.exports = displayPasswordStrength;
