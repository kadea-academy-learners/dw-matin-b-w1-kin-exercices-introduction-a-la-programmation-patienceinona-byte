// ===== ÉNONCÉ (ne pas modifier) =====
const enonce = `
A5 — Le nombre mystère (Niveau 3 — Avancé)

Objectif : construire un jeu complet avec while, prompt(), Number(), conditions et compteur.
Contexte : le jeu de la pause déjeuner : deviner un nombre entre 1 et 100 en 7 essais maximum.

Consignes :
1. Tire un nombre entier aléatoire entre 1 et 100 avec Math.random() et Math.floor().
2. Tant que le joueur n'a pas trouvé et qu'il lui reste des essais, demande un nombre avec prompt().
3. Refuse une saisie qui n'est pas un nombre (sans compter l'essai).
4. Réponds « plus grand », « plus petit » ou « trouvé en X essais ! ».
5. Si les 7 essais sont épuisés, révèle le nombre.

Résultat attendu :
un jeu jouable dans la console du navigateur, qui ne plante jamais, même si on tape « abc ».

Recherche (à rédiger dans RECHERCHES.md) :
Explique la « recherche dichotomique » et pourquoi 7 essais suffisent toujours pour trouver un nombre entre 1 et 100.
`;
// ===== FIN ÉNONCÉ =====

// ✍️ Ton code ici 👇 (règles : const/let, ===, gabarits littéraux, fonctions fléchées, camelCase)
function prompt(question){
    const fs =require('fs');
    process.stdout.write(question);
    let buffer = Buffer.alloc(1024);
    let bytes =fs.readSync(0,buffer,0,1024);
    return buffer.toString().trim();
}
const nombreMystere =Math.floor(Math. random()* 100) +1;
const essaisMax =7;
let essai =0;
let trouve =false;
let abandon =false;
while(! trouve && ! abandon && essai < essaisMax){
    const saisie = prompt(
        `devine le nombre entre 1 et 100 (essai ${essai +1}/7${essaisMax})`
    );
    if(essai === null){
        // le joueur a clique sur annuler
        abandon =true
    }else{
        const proposition =Numbre(saisie);
        if(saisie.trim()===""|| Numbre.isNaN(proposition)){
            // saisie invalide :l'essai n'est pas compte
            console.log("ce n'est pas un nombre, reessaie !");
        }else{
            essais++;
            if(proposition ===nombreMystere){
                trouve = true;
                console.log(`trouve en ${essais} essais !`);
            }else if(proposition < nombreMystere){
                if(essai === null){
                    //joueur a clique sur annuler
                    abandon= true;
                }else{
                    const proposition =Number(saisie);
                    if(saisie.trim()===""|| Number.isNaN(proposition)){
                        //saisie invalide :l'essai n'ets pas compte
                        console.log("ce n'est pas un nombre,ressais !")
                    }else{
                        essai++
                        if(proposition===nombreMystere){
                            trouve = true;
                            console.log(`trouve en ${essai}essais !`)
                        }else if(proposition < nombreMystere){
                            console.log("plus grand !");
                        }else{
                            console.log("plus petit")
                        }
                    }
                }
            }
              
            if(! trouve && ! abandon){
                console.log(`perdu ! le nombre mystere etait ${nombreMystere}.`);
            }
            }

            }
        }
    





