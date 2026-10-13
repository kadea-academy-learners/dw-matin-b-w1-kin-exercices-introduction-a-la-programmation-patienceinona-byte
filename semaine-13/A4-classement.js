// ===== ÉNONCÉ (ne pas modifier) =====
const enonce = `
A4 — Le classement de la promo (Niveau 3 — Avancé)

Objectif : combiner fonctions, boucles, conditions et méthodes de tableau dans un même programme.
Contexte : un formateur veut le bulletin d'une promo fictive.

Consignes :
1. Crée un tableau d'objets : Amani [14, 16, 15], Bijou [17, 18, 16], Christian [8, 11, 9], Divine [12, 10, 14], Exaucé [16, 15, 19].
2. Écris calculerMoyenne(notes) avec une boucle et un accumulateur, arrondie à une décimale.
3. Avec .map(), crée un bulletin avec nom, moyenne et mention : 16 et plus « Excellent », 10 et plus « Admis », sinon « Rattrapage ».
4. Avec .filter(), compte les admis (mention Excellent ou Admis) ; avec .find(), trouve le premier « Excellent ».
5. Affiche le bulletin avec console.table().

Résultat attendu :
moyennes 15, 17, 9.3, 12, 16.7 ; 4 admis ; premier Excellent : Bijou.

Recherche (à rédiger dans RECHERCHES.md) :
Comment classer le bulletin de la meilleure à la moins bonne moyenne avec .sort() ? Pourquoi .sort() modifie-t-il le tableau d'origine, et comment l'éviter ?
`;
// ===== FIN ÉNONCÉ =====

// ✍️ Ton code ici 👇 (règles : const/let, ===, gabarits littéraux, fonctions fléchées, camelCase)
const promo =[
    {nom:"amani",notes:[14,16,15]},
    {nom:"bijou",notes:[17,18,16]},
    {nom:"christian",notes:[8,11,9]},
    {nom:"bivine",notes:[12,10,14]},
    {nom:"exauce",notes:[16,15,19]},
];
function calculerMoyenne(notes){
    let somme = 0;
    for(let i = 0; i <notes.length;i++){
        somme +=notes[i];
    }
    return parseFloat((somme/notes.length).toFixed(1));
}
const bulletin =promo.map(etudiant =>{
    const moyenne = calculerMoyenne(etudiant.notes);
    let mention ="";
    if(moyenne >=16){
        mention ="excellent";
    }else{
        mention ="rattrapage";
    }
    return{nom: etudiant.nom,moyenne,mention};
});
const premierExcellent = bulletin.find(b => b.mention ==="excellent" );
const nbadmis = bulletin.filter(b => b.mention ==="excellen"|| b.mention ==="admis").length;
console.log(bulletin);
console.log(`nombre d'admis :${nbadmis}`);
console.log(`premier excellent :${premierExcellent ? premierExcellent.nom:"aucun"}`);


    





