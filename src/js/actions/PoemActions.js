import alt from '../alt'

class PoemActions {
  constructor() {
    this.generateActions(
      'sync',
      'fetchedPoems',
    )
  }
}

export default alt.createActions(PoemActions)
