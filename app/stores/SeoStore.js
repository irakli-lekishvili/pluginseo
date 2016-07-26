import alt from 'alt'
import Immutable from 'immutable'
import { createStore, bind } from 'alt-utils/lib/decorators'
import { SeoActions } from 'actions'
import SeoSource from 'sources/SeoSource'

@createStore(alt)
export default class SeoStore {
  constructor() {
    this.state = {
      todos: [],
      seo: Immutable.Map({})
    }

    this.registerAsync(SeoSource)
  }

  @bind(SeoActions.updateTodo)
  updateTodo(todo) {
    // this.setState({ todos: this.state.todos.concat(todo) })
  }

  @bind(SeoActions.FETCH_SEO)
  onFetchSeo() {
    // this.state.IS_FETCHING = true
  }

  @bind(SeoActions.UPDATE_SEO)
  updateSeo(data) {
    this.state.seo = Immutable.fromJS(data)
    // this.state.seo.get('checks').map(x=> console.log(x))
  }

  @bind(SeoActions.SEO_FAILED)
  onSeoFaild(message) {
    // this.state.IS_FETCHING = false
  }
}
