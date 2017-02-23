import alt from '../alt'
import PoemActions from '../actions/PoemActions'

class PoemStore {
  constructor() {
    this.bindActions(PoemActions)
    this.poems = []
    this.loading = false
    this.is_modal = false
    this.edit_poem = ''
  }

  onFetched(poems) {
    this.loading = false
    // this.poems = poems
    this.poems = poems.reverse()
  }

  onAdded(poem) {
    // this.poems.push(poem)
    this.poems.unshift(poem)
  }

  onDelete(poemToDestroy) {
    this.poems = this.poems.filter((poem) => {
      return poem !== poemToDestroy
    })
  }

  onOpenModal(poem) {
    this.edit_poem = poem
    this.is_modal = true
  }

  onCloseModal() {
    this.edit_poem = ''
    this.is_modal = false
  }

  onEdit(obj) {
    this.poems = this.poems.map((poem) => {
      if (poem.id === obj.id) { poem.body = obj.body }
      this.is_modal = false
      return poem
    })
  }
}

export default alt.createStore(PoemStore, 'PoemStore')
