//N'est pas une fonction pure
// let PI = 3.2;
// const calculerSurfaceCercle = (rayon) => rayon * rayon * PI
// console.log(calculerSurfaceCercle(10))


//Fonction Pure
const PI = 3.14
const calculerSurfaceCercle = (rayon, pi) => rayon * rayon * pi;

console.log(calculerSurfaceCercle(10, PI))

//Lire un fichier
//N'est pas une fonction  pure
// const compteurDeCaractere = (texte) => 'nombre de caractère : ' + texte.length

// function lireFichier(nom_fichier) {
//   let contenu_fichier = open(nom_fichier);
//   return compteurDeCaractere(contenu_fichier);
// }

//La fonction n'est pas une fonction pure
// function heureSupp() {
//   if (Math.random() > 40) {
//     return "Payer les heures supps"
//   } else {
//     return "Pas d'heures supps"
//   }
// }
//console.log(heureSupp)


// let compteur = 1;
// //La fonction n'est pas pure
// function incrementer(valeur) {
//   compteur = valeur + 1
// }


// incrementer(compteur);
// console.log(compteur); //2

//Fonction pure 
// let compteur

// function incrementer(valeur) {
//   return valeur + 1
// }

// incrementer(compteur) //2
// console.log(compteur) //1


// Fonction pure
// let list = [1, 2, 3, 4, 5]

// const incrementerNombre = (list) => list.map(nombre => nombre + 1)

// console.log(incrementerNombre(list)); // [2, 3, 4, 5, 6]


//La somme est mutable
let tableau = [1, 2, 3, 4, 5]

let sumOfValues = 0;

for (var i = 0; i < tableau.length; i++) {
  sumOfValues += tableau[i]
}

console.log(sumOfValues); //15

//La somme est immutable
// let tab = [1, 2, 3, 4, 5]
// let accumulateur = 0;

// function sum(tab, accumulateur) {
//   if (tab.length == 0) {
//     return accumulateur
//   }

//   return sum(tab.slice(1), accumulateur + tab[0])
// }

// console.log(sum(tab, accumulateur));
// console.log(tab);
// console.log(accumulateur);

function ajout(a, b) {
  return a + b;
}

console.log(ajout(1, 2))

//Currying
ajout = (a) => (b) => a + b;
console.log(ajout(1)(2))


tableau = [21, 515, 478, 523, 50, 9, 71]
//Quelques fonctions pures de javascript
//Filter permet de filtrer des éléments
const elementPaires = x => x % 2 === 0;

console.log("elements paires", tableau.filter(elementPaires))

//Map permet de boucler sur les éléments
const double = x => 2 * x;
console.log("double", tableau.map(double))

//Reduce retourne une valeur comme résultat
const somme = (accumulateur, tableau_element) => accumulateur + tableau_element

console.log("Somme des éléments", tableau.reduce(somme));

//Concat  rajoute un élément dans un tableau en créant un nouveau
console.log("Concaténation", tableau.concat([0, 2]))

const tableau_concatene = [21, 515, 478, 523, 50, 9, 71, ...[0, 2]]
console.log("concaténé avec les spread operator", tableau_concatene)


//Object assign copie les valeurs d'un objet et les rajoute à un nouvel objet
const obj = { nom: 'Ernest' };
//const newObj = Object.assign({}, obj)
//newObj.nom = 'Inconnu'

const newObj = { ...obj }
newObj.nom = 'Inconnu'

console.log(obj, newObj)


//Corrigé de l'exercice

// const renvoiChaine = (chaine, n) => n < 1 ? '' : chaine + renvoiChaine(chaine, n - 1)

// console.log(renvoiChaine('hip hip hourra!', 4))


//Fonction d'ordre supérieur
// function direBonjour() {
//   return 'Bonjour'
// }

// let fn = direBonjour //passage référence

// fn()

// function salutation(fonction_salut) {
//   console.log(fonction_salut())
// }

// salutation(direBonjour)

// //Composition utiliser le résultat d'une fonction en paramètre d'une autre fonction

// const table = (a, b) => a > b ? [] : [a, ...table(a + 1, b)]

// const multiplication = arr => arr.reduce((p, a) => p * a)

// const factoriel = nombre => multiplication(table(1, nombre));

// console.log("factoriel de 5", factoriel(5), "factoriel de 9", factoriel(9))

let input = "javascript"

let output = "<div>" + input.trim() + "</div>"
const tagDiv = str => '<div>' + str + '</div>'
//const tagApp = (str, tag) => `<${tag}>${str}</${tag}>`
const tagApp = (tag) => (str) => `<${tag}>${str}</${tag}>`
const minuscule = str => str.toLowerCase()

//const resultat = chaine => tag => tagApp(tag)(minuscule(chaine))

const transform = compose(tagApp, minuscule)

const transformation = pipe(minuscule, tagApp)



console.log(transformation("TEST")("p"))



//Immutabilité

const personne = { nom: 'Ernest', addresse: { pays: 'USA', ville: 'Detroit' } }
console.log(personne)

//const mis_a_jour = Object.assign({}, { nom: 'Inconnu', age: 1 })
const mis_a_jour1 = { ...personne, address: { ...personne.addresse, ville: 'Chicago' }, nom: 'Inconnu' }
console.log(mis_a_jour1, personne)

const nombres = [1, 2, 3]

const index = nombres.indexOf(3)

const mis_a_jour = [...nombres.slice(0, index), 4, ...nombres.slice(index)]

console.log(nombres, mis_a_jour)

//Imperative et Déclarative

let value = [1, 2, 3, -4, 5]

console.log("debut", value)

//Imperative 
for (var i = 0; i < value.length; i++) {
  value[i] = Math.abs(value[i])
}

console.log("fin", value)

//Declarative
let values = [1, 2, 3, -4, 5]

const updatevalues = (value) => value.map(Math.abs)

const new_tab = updatevalues(values)

console.log("fin declaratif", new_tab)



// //Exercice 1
// let personnes = [
//   { nom: "Ernest", age: 1 },
//   { nom: "personne2", age: 24 },
//   { nom: "personne3", age: 55 },
//   { nom: "personne4", age: 63 },
//   { nom: "personne5", age: 26 },
//   { nom: "personne6", age: 19 },
// ]
// console.log("personnes", personnes)
// //Renvoyer la liste des personnes ayant plus de 25
// //Methode impérative
// let index = []
// for (let i = 0; i < personnes.length; i++) {
//   if (personnes[i].age > 25) {
//     index.push(personnes[i])
//   }
// }

// console.log(index)

// //Methode Déclarative
// const result = personnes.filter(personne => personne.age > 25)
// console.log(result);


//Excercice2

//Avec le même tableau, renvoyer pour chaque personne le message x a y ans x étant le nom et y étant l'age.
//En impératif et en déclaratif



//Excercice3 
let commande = [
  { titre: "produit1", prix: 5 },
  { titre: "produit2", prix: 10 },
  { titre: "produit3", prix: 2 },
  { titre: "produit4", prix: 1.5 },
  { titre: "produit5", prix: 25 },
  { titre: "produit6", prix: 9.8 },
]

//retourner la somme totale à payer pour la commande
//En mode impératif et en mode déclaratif


//Excercice4
let commande1 = [
  { titre: "produit1", prix: 5, type: "livre" },
  { titre: "produit2", prix: 10, type: "livre" },
  { titre: "produit3", prix: 2, type: "produit alimentaire" },
  { titre: "produit4", prix: 1.5, type: "produit alimentaire" },
  { titre: "produit5", prix: 25, type: "produit numérique" },
  { titre: "produit6", prix: 9.8, type: "livre" },
]
  //Même excercice que le 3 mais renvoyer la somme totale à payer suivant le type de produit renseigné
  //En mode impératif et en mode déclaratif