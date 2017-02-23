import alt from '../alt'
import MandaySource from '../sources/MandaySource'

class PoemActions {
  constructor() {
    this.generateActions(
      'fetched',
      'added',
      'openModal',
      'closeModal',
    )
    this.endpoint = 'poems'
  }

  sync(date) {
    MandaySource.fetchAt(this.endpoint, date, this.fetched)
  }

  add(poem) {
    MandaySource.add(this.endpoint, poem, this.added)
  }

  delete(poem) {
    MandaySource.delete(this.endpoint, poem.id)
    return poem
  }

  edit(id, body) {
    const params = { body }
    MandaySource.update(this.endpoint, id, params)
    return { id, body }
  }

}

export default alt.createActions(PoemActions)
