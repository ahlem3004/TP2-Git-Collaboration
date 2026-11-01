const saisirMotDePasse = require("./module1");
const displayPasswordStrength = require("./module3");

async function main() {
    const motDePasse = await saisirMotDePasse();

    if (motDePasse === null) {
        console.log("Veuillez réessayer.");
        return;
    }

    console.log("Mot de passe reçu avec succès !");
}

main();
