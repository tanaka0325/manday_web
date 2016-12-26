import Api from '../utils/apiUtils'
import PoemAction from '../actions/PoemActions'

const API_URL = 'http://localhost:9999/poems'

const PoemSource = {
  fetch: () => {
    Api.ajaxGet(API_URL)
      .then(PoemAction.fetchedPoems)
  },

  add: (poem) => {
    Api.ajaxPost(API_URL, poem)
      .then(PoemAction.addedPoem)
  },

  delete: (id) => {
    Api.ajaxDelete(`${API_URL}/${id}`)
      .then(PoemAction.sync)
  },
}

export default PoemSource
