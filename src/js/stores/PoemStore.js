import alt from '../alt'
import PoemActions from '../actions/PoemActions'

class PoemStore {
  constructor() {
    this.bindActions(PoemActions)
    this.poems = []
    this.loading = false
  }

  onFetchedPoems(poems) {
    this.loading = false
    this.poems = poems
  }

  onAddedPoem(poem) {
    this.poems.push(poem)
  }

  onDeletePoem(poemToDestroy) {
    this.poems = this.poems.filter((poem) => {
      return poem !== poemToDestroy
    })
  }
}

export default alt.createStore(PoemStore, 'PoemStore')
