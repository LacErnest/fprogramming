//import { immerable } from 'immer'

class Todo {

  //[immerable] = true
  constructor(titre) {
    //this[immerable] = true
    this.titre = titre
    this.is_finished = false
  }

  toggle() {
    this.is_finished = !this.is_finished
  }
}

export default Todo