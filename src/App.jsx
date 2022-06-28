import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {


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



  return (
    <div className="App">
    </div>
  )
}

export default App
