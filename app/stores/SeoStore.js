import alt from 'alt'
import { createStore, bind } from 'alt-utils/lib/decorators'
import { SeoActions } from 'actions'
import SeoSource from 'sources/SeoSource'

@createStore(alt)
export default class SeoStore {
  constructor() {
    this.state = {
      todos: []
    }

    this.registerAsync(SeoSource)
  }

  @bind(SeoActions.updateTodo)
  updateTodo(todo) {
    this.setState({ todos: this.state.todos.concat(todo) })
  }

  @bind(SeoActions.FETCH_SEO)
  onFetchSeo() {
    this.state.IS_FETCHING = true
  }

  @bind(SeoActions.UPDATE_SEO)
  updateSeo(data) {
    this.state.IS_FETCHING = false
  }

  @bind(SeoActions.SEO_FAILED)
  onSeoFaild(message) {
    this.state.IS_FETCHING = false
  }
}
