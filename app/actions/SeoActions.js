import alt from 'alt'
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
    return { ...response.data }
  }

  seoFailed(message) {
    return {}
  }
}
