import request from 'superagent'

class Api {

  static ajaxGet(endpoint, params, token = undefined) {
    return this._ajaxRequest(request.get, endpoint, params, token)
  }

  static ajaxPost(endpoint, params, token = undefined) {
    return this._ajaxRequest(request.post, endpoint, params, token)
  }

  static ajaxDelete(endpoint, params, token = undefined) {
    return this._ajaxRequest(request.del, endpoint, params, token)
  }

  static ajaxPatch(endpoint, params, token = undefined) {
    return this._ajaxRequest(request.patch, endpoint, params, token)
  }

  static _makeHeader(token) {
    return token ? { Authorization: token } : {}
  }

  static _ajaxRequest(method, endpoint, params, token) {
    return new Promise(
      (resolve, reject) => {
        method(endpoint)
        .withCredentials()
        .send(params)
        .set(this._makeHeader(token))
        .end((err, res) => {
          if (err) {
            reject(err)
          } else {
            resolve(JSON.parse(res.text))
          }
        })
      },
    )
  }
}

export default Api
