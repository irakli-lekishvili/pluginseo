import alt from 'alt'
import Immutable from 'immutable'
import { createStore, bind } from 'alt-utils/lib/decorators'
import { SeoActions } from 'actions'
import SeoSource from 'sources/SeoSource'

@createStore(alt)
export default class SeoStore {
  constructor() {
    this.state = {
      seo: Immutable.Map({}),
      isFetching: false,
      url: ''
    }

    this.registerAsync(SeoSource)
  }

  @bind(SeoActions.UPDATE_URL)
  updateUrl(data) {
    this.setState(data)
  }

  @bind(SeoActions.FETCH_SEO)
  onFetchSeo() {
    this.state.isFetching = true
  }

  @bind(SeoActions.UPDATE_SEO)
  updateSeo(data) {
    this.state.seo = Immutable.fromJS(data)
    this.state.isFetching = false
  }

  @bind(SeoActions.SEO_FAILED)
  onSeoFaild(message) {
    this.state.isFetching = true
  }
}
