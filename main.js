const saisirMotDePasse = require("./module1");

const displayPasswordStrength = require("./module3");

async function main() {
    const motDePasse = await saisirMotDePasse();

    if (motDePasse === null) {
        console.log("Veuillez réessayer.");
        return;
    }
       const results = {
    length: motDePasse.length >= 8,
    uppercase: /[A-Z]/.test(motDePasse),
    lowercase: /[a-z]/.test(motDePasse),
    number: /[0-9]/.test(motDePasse),
    specialChar: /[^A-Za-z0-9]/.test(motDePasse)
};

const result = displayPasswordStrength(results);

console.log("Password strength:", result.strength);
console.log("Recommendations:", result.tips);

    console.log("Mot de passe reçu avec succès !");
}

main();
