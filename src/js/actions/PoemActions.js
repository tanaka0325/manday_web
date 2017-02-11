import alt from '../alt'
import MandaySource from '../sources/MandaySource'

class PoemActions {
  constructor() {
    this.generateActions(
      'fetchedPoems',
      'addedPoem',
    )
    this.endpoint = 'poems'
  }

  sync(date) {
    MandaySource.fetchAt(this.endpoint, date, this.fetchedPoems)
  }

  addPoem(poem) {
    MandaySource.add(this.endpoint, poem, this.addedPoem)
  }

  deletePoem(poem) {
    MandaySource.delete(this.endpoint, poem.id)
    return poem
  }
}

export default alt.createActions(PoemActions)
