import Api from '../utils/apiUtils'
import PoemAction from '../actions/PoemActions'

class PoemSource {

  static API_URL = 'http://localhost:9999/poems'

  static fetchAt(date) {
    Api.ajaxGet(`${this.API_URL}/date/${date}`)
      .then(PoemAction.fetchedPoems)
  }

  static add(poem) {
    Api.ajaxPost(this.API_URL, poem)
      .then(PoemAction.addedPoem)
  }

  static delete(id) {
    Api.ajaxDelete(`${this.API_URL}/${id}`)
  }
}

export default PoemSource
