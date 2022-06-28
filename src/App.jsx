import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

import Todo from './Todo';

import { immerable, current, original } from 'immer'

//import { compose, pipe } from 'lodash/fp'

import { produce } from 'immer'

function App() {

  //Excercice
  //Créer une classe User{username, email, password}
  //Article {titre, auteur, date_publication, status[published, draft, pending], 
  //payant:(true, false), prix: (si payant prix > 0, sinon prix =0)}

  //Commande {owner: <User>, articles:[{<Article>}]}

  //Initialiser les classes avec 5 utilisateurs (5 objets de type User)
  //avec 10 articles
  // 10 commandes avec au moins 2 articles par commandes

  //Créer la fonction commander qui va créer une commande
  //Créer la fonction annulerCommandeArticle qui va prendre l'index d'un article d'une commande et la retirer de la commande
  //Créer la foonction modifierArticle qui modifie une information d'un article
  //Créer la fonction modifierUser qui modifie une information d'un utilisateur

  //Il faudra appliquer la methode immerable pour les modifications des objets



  const todo = {
    todos: [
      { titre: 'todo1', is_finished: false },
      { titre: 'todo2', is_finished: false },
      { titre: 'todo3', is_finished: false },
    ]
  }

  const todotoggle = produce(function (draft, todo) {
    const selectTodo = draft.todos.find(t => {
      console.log("draft", t)
      console.log("objet courant", current(t))
      console.log("objet original", original(t))

      return original(t) === todo
    })

    selectTodo.is_finished = !selectTodo.is_finished
  })


  //La nouvelle liste de todo à partir de la liste de todo avec modification de la todo de l'index 1
  const todo_test = todotoggle(todo, todo.todos[1])
  console.log(todo, todo_test)


  // Todo[immerable] = true

  // const todos = [
  //   new Todo('titre1'),
  //   new Todo('titre2'),
  //   new Todo('titre3'),
  // ]

  // const newTodos = produce(todos, draft => {
  //   draft[0].toggle()
  // })

  // console.log(todos === newTodos) //true


  //Ne garde pas l'immutabilité de todo
  // function changementEtat(todo, index) {
  //   if (index > todo.todos.length) {
  //     return todo
  //   }

  //   todo.todos[index].is_finished = !todo.todos[index].is_finished
  //   return todo
  // }

  //console.log("depart", todo)
  //console.log("fin", changementEtat(todo, 2))


  //Garde l'immutabilité
  // function changementEtatImmutable(todo, index) {
  //   if (index > todo.todos.length) {
  //     return todo
  //   }

  //   return {
  //     ...todo,
  //     todos: todo.todos.map((element, i) => i === index ? { ...element, is_finished: !element.is_finished } : element)
  //   }
  // }

  // console.log("debut immutable", todo)
  // console.log("fin immutable", changementEtatImmutable(todo, 1))

  // function changementEtatImmer(todo, index) {
  //   return produce(todo, function (draft) {
  //     console.log("draft", draft)
  //     draft.todos[index].is_finished = !draft.todos[index].is_finished
  //   })
  // }

  // console.log("debut immer", todo)
  // console.log(changementEtatImmer(todo, 1))

  return (
    <div className="App">
    </div>
  )
}

export default App
