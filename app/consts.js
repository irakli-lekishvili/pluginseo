const BASE_URL = 'https://www.pluginseo.com/api/developertest/seoproblems/result?u='

export function API_URL(url) {
  return `${BASE_URL}${url}&format=json`
}
