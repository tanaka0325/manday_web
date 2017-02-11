import Api from '../utils/apiUtils'

class MandaySource {

  static API_URL = 'http://localhost:9999'

  static fetchAt(endpoint, date, callback) {
    Api.ajaxGet(`${this.API_URL}/${endpoint}/date/${date}`)
      .then(callback)
  }

  static add(endpoint, poem, callback) {
    Api.ajaxPost(`${this.API_URL}/${endpoint}`, poem)
      .then(callback)
  }

  static delete(endpoint, id) {
    Api.ajaxDelete(`${this.API_URL}/${endpoint}/${id}`)
  }
}

export default MandaySource
