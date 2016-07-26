import axios from 'axios'
import { API_URL } from 'consts'
import { SeoActions } from 'actions'

const SeoSource = {
  fetchSeo(url) {
    return {
      remote() {
        return axios.get(API_URL)
      },

      local() {
        return null
      },

      loading: SeoActions.fetchSeo,
      success: SeoActions.updateSeo,
      error:   SeoActions.seoFailed,
    }
  }
}

module.exports = SeoSource
