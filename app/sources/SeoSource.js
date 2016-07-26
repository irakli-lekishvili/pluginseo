import axios from 'axios'
import { SeoActions } from 'actions' 

const SeoSource = {
  fetchSeo() {
    return {
      remote() {
        const api_endpoint = 'https://www.pluginseo.com/api/developertest/seoproblems/result?u=pluginseo.com&format=json'
        return axios.get(api_endpoint)
      },

      local() {
        return null
      },

      loading: SeoActions.fetchSeo,
      success: SeoActions.updateSeo,
      error:   SeoActions.seoFailed,
    }
  }
};

module.exports = SeoSource;
