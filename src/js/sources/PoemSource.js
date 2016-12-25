import request from 'superagent'

import PoemAction from '../actions/PoemActions'

const PoemSource = {
  fetch: () => {
    request
      .get('http://localhost:9999/poems')
      .withCredentials()
      .end((err, res) => {
        if (err) {
          console.log(err)
        } else {
          PoemAction.fetchedPoems(res.body)
        }
      })
  },
}

export default PoemSource
