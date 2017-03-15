import Api from '../utils/apiUtils'

class MandaySource {

  static API_URL = 'http://localhost:8888'

  static fetchAt(endpoint, date, callback) {
    Api.ajaxGet(`${this.API_URL}/${endpoint}/date/${date}`)
      .then(callback)
  }

  static add(endpoint, data, callback) {
    Api.ajaxPost(`${this.API_URL}/${endpoint}`, data)
      .then(callback)
  }

  static delete(endpoint, id) {
    Api.ajaxDelete(`${this.API_URL}/${endpoint}/${id}`)
  }

  static update(endpoint, id, params) {
    Api.ajaxPatch(`${this.API_URL}/${endpoint}/${id}`, params)
  }
}

export default MandaySource
