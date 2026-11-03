
const saisirMotDePasse = require("./module1");
const analyzePassword = require("./module2");
const displayPasswordStrength = require("./module3");

async function main() {

    // Module 1: Get password from user
    const motDePasse = await saisirMotDePasse();

    if (motDePasse === null) {
        console.log("Veuillez réessayer.");
        return;
    }

    // Module 2: Analyze password
    const results = analyzePassword(motDePasse);

    console.log("\n===== PASSWORD ANALYSIS =====");

    console.log("Score:", results.score, "/ 5");

    console.log("\nFeedback:");

    if (results.feedback.length === 0) {
        console.log("All security criteria are satisfied!");
    } else {
        results.feedback.forEach(tip => {
            console.log("- " + tip);
        });
    }

    // Module 3: Display password strength
    const strength = displayPasswordStrength(results);

    console.log("\n===== PASSWORD STRENGTH =====");

    console.log("Strength:", strength.strength);

    console.log("\nSecurity Tips:");

    if (strength.tips.length === 0) {
        console.log("Your password meets all criteria!");
    } else {
        strength.tips.forEach(tip => {
            console.log("- " + tip);
        });
    }

}

main();
