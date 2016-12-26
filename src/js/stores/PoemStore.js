import alt from '../alt'
import PoemActions from '../actions/PoemActions'
import PoemSource from '../sources/PoemSource'

class PoemStore {
  constructor() {
    this.bindActions(PoemActions)
    this.poems = []
    this.loading = false
  }

  onSync(date) {
    this.loading = true
    PoemSource.fetchAt(date)
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
