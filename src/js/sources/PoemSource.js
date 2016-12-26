import request from 'superagent'

import PoemAction from '../actions/PoemActions'

const API_URL = 'http://localhost:9999/poems'

const PoemSource = {
  fetch: () => {
    request
      .get(API_URL)
      .withCredentials()
      .end((err, res) => {
        if (err) { console.log(err) }
        PoemAction.fetchedPoems(res.body)
      })
  },

  add: (poem) => {
    request
      .post(API_URL)
      .withCredentials()
      .send(poem)
      .end((err, res) => {
        if (err) { console.log(err) }
        PoemAction.addedPoem(res.body)
      })
  },

  delete: (id) => {
    request
      .delete(`${API_URL}/${id}`)
      .withCredentials()
      .end((err) => {
        if (err) { console.log(err) }
        PoemAction.sync()
      })
  },
}

export default PoemSource
