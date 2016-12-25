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
}

export default alt.createActions(PoemActions)
