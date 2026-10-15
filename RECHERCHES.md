# RECHERCHES — Semaine 13

> Pour chaque exercice : reformule avec tes mots (pas de copier-coller), ajoute un test que tu as exécuté toi-même,
> et cite une source précise (une page, pas juste « Google »). MDN en français est la référence.
> Si tu as utilisé une IA, indique ton prompt et vérifie sa réponse sur MDN.
> Ne modifie pas les titres `## F1 — …` : ils servent à l'évaluation automatique.

## F1 — Ma carte d'apprenant

**Question :** Pourquoi typeof null renvoie-t-il 'object' alors que null n'est pas un objet ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**
c'est un ancien bug de javascript depuis sa creation en 1995.au debut,les valeur etaient stockees avec un type, et null avait le mem tag que les objets.donc typeof null a renvoy 'objetc' par erreur.ce bug n'a jamais ete corrige pour ne pas casser les anciens sites qui dependent de ce comportement.

...

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```
console.log(typeof null);
console.log(typeo {});
console.log(=== null);
console.log(null == undefined);


**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## F2 — Le convertisseur de saisie

**Question :** Qu'est-ce que NaN, et pourquoi NaN === NaN renvoie false ? Quelle fonction utiliser pour le détecter ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**
NaN signifie Not a number ,c'est le resultat d'un calcul impossible comm 0/0 ou Numbre("abc").en javascript,selon la norme IEE 754, n'est jamais egal a lui-meme,meme pas avec ===.c'est pour ca que NaN===donne false. pour tester,il ne faut pas utiliser === mais Numbre.isNaN()

...

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```
console.log(typeof NaN);
console.log(NaN === NaN);
console.log(Number.isNaN(NaN));
console.log(Number.isNaN("hello"));
console.log(isNaN("hello"));


**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## F3 — Pair ou impair : le tirage des tickets

**Question :** Que renvoie -7 % 2 ? Déduis-en pourquoi il vaut mieux tester % 2 !== 0 plutôt que % 2 === 1 pour détecter un nombre impair.

**Ma réponse (avec mes mots, 3 à 5 lignes) :**
en javascript -7 % 2 renvoie -1 et pas 1, car l'operateur % garde le signe du dividende.donc si on teste avec % 2===1 , on rate tous les nombreimpairs negatifs.il vaut mieux tester % 2 !==0 car ca marche pour les positifs et les negatifs :un impair aura toujour un rest different  de zero.

...

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```
console.log(-7 % 2);
console.log(7 % 2);
console.log(-7 % 2 === 1);
console.log(-7 % 2 !==0);
console.log(-8 % 2 !==0);

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## F4 — Le contrôleur du bus

**Question :** Peut-on enchaîner plusieurs ternaires ? Pourquoi est-ce souvent déconseillé ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**
oui on peut enchainer plusieurs ternaires en les imbriquant, par exemple condition ? val1: condition ?val2 :val3,mais c'est deconseille car le code devient tres difficile a lire et à dbeugge? pour la lisibilite, il vaut mieux utiliser des if /else if? et ESLINT interdit souvent les ternaires imbrique.

...

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```
const age =20;
const ticket = age <12 ?"gratui":age<25 ?"rebuit":"plein";
console.log(ticket);
let ticket2;
if(age<12)ticket2=="gratuit";
else if(age<25)ticket2="reduit";
else ticket2="plein";
console.log(ticket2)

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## F5 — Ma première fonction fléchée

**Question :** Quand peut-on enlever les parenthèses autour des paramètres, et quand peut-on enlever return et les accolades ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**
on peut enlever les parentheses quand il y a un seul parametre simple si 0 parametre ou plusieur,on doit garderles parentheses

...

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```
const double = x => x *2;
console.log(bouble(3));

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## F6 — Le compte à rebours

**Question :** À quoi sert le mot-clé continue ? Quelle différence avec break ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**
continue sert à sauter l'interation en cours et passer a la suivante dans une boucle.break arrete completement la boucle. continue continue la boucle,break la casse.

...

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```
for(let i=3; i>=0;i--){
    if(i===1)continue;
    console.log(I)
}

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## M1 — FizzBuzz kinois

**Question :** Pourquoi FizzBuzz est-il célèbre dans les entretiens d'embauche de développeurs ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**
c'est un test filtre tre simple qui qui elimine 90%des canditats qui  ne savent pas boucler et tester module. il vrifie si on maitrise if,%, et console.log sans bloque.



...

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```
for(let i=1;i<=15;++){
    if(i%3==0&&i%5==0)console.log("fizzbuzz");
    else if(i%3==0)console.log("fizz");
    else if(i%3==0)console.log("buzz");
    else console.log(i)
    
}

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## M2 — Le distributeur automatique (DAB)

**Question :** Comment afficher 75000 sous la forme 75 000 avec toLocaleString() ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**
% donne le reste d'une division.pour un DAB,ça sert à savoir ce qu'il rest à distribuer en billets. ex:87%20=7.c'est aussi utile pour tester pair/impair

...

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```
console.log(87 %20)
console.log(10 %2)
console.log(7 %2)

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## M3 — Le détecteur de champs vides (Truthy / Falsy)

**Question :** Quelle est la liste complète des valeurs falsy en JavaScript ? (Indice : il y en a plus que dans cet exercice.)

**Ma réponse (avec mes mots, 3 à 5 lignes) :**
en js ,8 valeur sont falsy:false,0,"",null,undefine,NaN? on, docuement.all.tout le reste truthy.ça permet de tester if(!champ)pour detecter vide sans comparer a chaque cas.

...

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```
console.log(boolean(""));
console.log(boolent("abc"));
console.log(boolent(0));
if(!""){console.log("champ vide");}


**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## M4 — Le score par défaut : || contre ??

**Question :** Que fait l'opérateur ?? (coalescence des nuls) et en quoi est-il différent de || ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**
// remplace toutes les valeur fausses(0,"",false,null,undefined).??ne remplace que null et undefined.donc poue un scrore de 0?||donne la valeur par defaut par erreur ,??garde 0.


...

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```
let score =0;
console.log(score||100);
console.log(score??100);



**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## M5 — La vitre teintée (portée de bloc)

**Question :** Pourquoi var est-il banni du code moderne ? Cherche ce que sont la portée de fonction et le « hoisting ».

**Ma réponse (avec mes mots, 3 à 5 lignes) :**
var n'a pas de portee de bloc,il fuit en dehors des {}peut eter re-declaire.let etconst bloques dans le bloc,plus sur,var est hoiste,ça cree des bugs.

...

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```
if(true){var *=1;let y=2};
console.log(*);
console.log(y);


**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## M6 — Le détective du return

**Question :** Le troisième bug vient de l'« insertion automatique de point-virgule » (ASI). Explique ce mécanisme en 3 lignes.

**Ma réponse (avec mes mots, 3 à 5 lignes) :**
return sert à renvoyer une valeur et arreter la fonction.s  ns return,la fonctionrenvoie undefined.

...

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```
function add(a,b){return a+b;}
function tst(){console.log("hi")}
console.log(add(2,3));
console.log(test());

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## M7 — La tirelire numérique

**Question :** Cite tous les opérateurs d'affectation composée (+=, -=…) et donne un exemple pour chacun.

**Ma réponse (avec mes mots, 3 à 5 lignes) :**
ce sont des raccouris qui combinent calcul + affectaction.on a +=;-=,*=,/=,%=,**=.exemple tirelire += ajoute directement

...

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```
let tirelire =100;
tirelire +=50;
tirelire -=20;
tirelire *=2;
console.log(tirelire);


**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## M8 — La batterie qui se décharge

**Question :** Quelle est la différence entre while et do...while ? Que donnerait l'étape 4 avec un do...while ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**
while verifie la condition avant d'entre,donc peut ne jamais s'executer.do...while execute au moins une fois puis verifie.pour une batterie,do...while grranti qu'on affiche au moins 1% de decharge.

...

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```
let batterie =0;
while(batterie >0){console.log(batterie)};
do{console.log("au moins un fois ",baterie);}while(batterie >0)// s'execute 1 fois

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## A1 — Kadea Express v2 : le calculateur de livraison

**Question :** Pourquoi 0.1 + 0.2 ne donne-t-il pas 0.3 en JavaScript ? Et pourquoi toFixed() est un piège si on veut continuer à calculer ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**
car js utlise le format IEE 754 en binaire. 0.1 et 0.1 ne sont pas exacts en binaire, ça donne 0?3000000000000004.pour un prix/livraison,on doit ou travailler en centimes pour evites les erreu

...

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```
console.log(0.1+0.2);
console.log(0.1+0.2===0.3);

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## A2 — Le moteur de paie v2

**Question :** La méthode .reduce() n'a pas été vue en atelier. Explique ce qu'elle fait et réécris l'étape 2 avec elle.

**Ma réponse (avec mes mots, 3 à 5 lignes) :**
.reduce()sert à reduire un tableau en une seule valeur. elle boucle et accumule. ex: somme des salaires.elle prend un accumulateur et chaque element.

...

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```
const salaires =[100,200,50];
const total =salaaires.reduce((acc,val)=> acc+val,0);
console.log(total)

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## A3 — L'inventaire en console

**Question :** Comment afficher seulement les colonnes nom et stock avec console.table() ? Et que renvoient .find() et .filter() quand rien ne correspond ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**
on uylise le 2e argument de console. table pour filtrer les colonnes.on fait console.table(inventaire,["nom","stock"]).ça evite d'afficher tout l'objet

...

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```
const inventaire =[{nom:"clavier",stock:5,prix:20},{nom:"souris",stock:0,prix:10}];
console.table(inventaire,["nom",stock"]);

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## A4 — Le classement de la promo

**Question :** Comment classer le bulletin de la meilleure à la moins bonne moyenne avec .sort() ? Pourquoi .sort() modifie-t-il le tableau d'origine, et comment l'éviter ?

**Ma réponse (avec mes mots, 3 à 5 lignes) :**
sort()trie sur place et modifie le tableau d'origine.pour classer decroissant on fait .sort((a,b)=>b.moyenne).pour ne pas modifier l'originl, on copie d'abord avce [...tableau].sort()ou .tosorted().
...

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```
const bullentins =[{nom:"a"m,:12},{nom:"b",m:16}];
const classement=[...bulletins].sort(("a,b)=>b.m-a.m);
console.log(classement);
console.log(bulletins);

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non

## A5 — Le nombre mystère

**Question :** Explique la « recherche dichotomique » et pourquoi 7 essais suffisent toujours pour trouver un nombre entre 1 et 100.

**Ma réponse (avec mes mots, 3 à 5 lignes) :**
la recherche dichotomique consiste à couper l' intervalle de recherche en deux à chaque essai on teste le millieu,puis,on garde seulement la moitie ou se treouve le nombre.comme on divise par 2 à chaque fois .pour 100 possibilites on a besion de log2(100)=6?64 donc 7 essai au pire. c'est beaucoup plus rapide que de tester 1 par 1

...

**Mon test dans la console :**

```js
// colle ici le test que tu as exécuté et le résultat obtenu
```
Math.log2(100)//6.64

**Source :** 

**IA utilisée ? (prompt + vérification sur MDN) :** non
