import alt from 'alt'
import { createStore } from 'alt-utils/lib/decorators'
import { SeoActions } from 'actions'

@createStore(alt)
export default class SeoStore {
  constructor() {
    this.bindListeners({
      updateTodo: SeoActions.updateTodo
    });

    this.state = {
      todos: []
    };
  }

  updateTodo(todo) {
    this.setState({ todos: this.state.todos.concat(todo) });
  }
}
