import alt from 'alt'
import Immutable from 'immutable'
import { createActions } from 'alt-utils/lib/decorators'

@createActions(alt)
export default class SeoActions {
  updateTodo(url) {
    return { url }
  }

  fetchSeo() {
    return {}
  }

  updateSeo(response) {
    let list = response.data
    return { ...list }
  }

  seoFailed(message) {
    return {}
  }
}
