import alt from '../alt'
import PoemActions from '../actions/PoemActions'

class PoemStore {
  constructor() {
    this.bindActions(PoemActions)
    this.poems = []
    this.nextPoemId = 0
  }

  onAddPoem(text) {
    this.poems.push({
      id: this.nextPoemId++,
      text,
    })
  }
}

export default alt.createStore(PoemStore, 'PoemStore')
