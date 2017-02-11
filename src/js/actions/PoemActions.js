import alt from '../alt'
import MandaySource from '../sources/MandaySource'

class PoemActions {
  constructor() {
    this.generateActions(
      'fetched',
      'added',
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
}

export default alt.createActions(PoemActions)
