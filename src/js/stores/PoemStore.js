import alt from '../alt'
import PoemActions from '../actions/PoemActions'
import PoemSource from '../sources/PoemSource'

class PoemStore {
  constructor() {
    this.bindActions(PoemActions)
    this.poems = []
    this.loading = false
  }

  onSync() {
    this.loading = true
    PoemSource.fetch()
  }

  onFetchedPoems(poems) {
    this.poems = poems
  }

}

export default alt.createStore(PoemStore, 'PoemStore')
