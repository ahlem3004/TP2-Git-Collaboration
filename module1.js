function saisirMotDePasse() {
    const readline = require("readline");

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise((resolve) => {
        rl.question("Entrez votre mot de passe : ", (motDePasse) => {
            if (motDePasse.trim().length === 0) {
                console.log("Erreur : le mot de passe est vide.");
                rl.close();
                resolve(null);
                return;
            }

            rl.close();
            resolve(motDePasse);
        });
    });
}

module.exports = saisirMotDePasse;
