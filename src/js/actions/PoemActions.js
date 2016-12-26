import alt from '../alt'
import PoemSource from '../sources/PoemSource'

class PoemActions {
  constructor() {
    this.generateActions(
      'sync',
      'fetchedPoems',
      'addedPoem',
    )
  }

  addPoem(poem) {
    PoemSource.add(poem)
  }

  deletePoem(id) {
    PoemSource.delete(id)
  }
}

export default alt.createActions(PoemActions)
