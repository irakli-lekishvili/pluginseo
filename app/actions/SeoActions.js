import alt from 'alt'
import { createActions } from 'alt-utils/lib/decorators'

@createActions(alt)
export default class SeoActions {
  updateUrl(url) {
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
