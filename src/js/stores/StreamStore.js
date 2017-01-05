import alt from '../alt'

class StreamStore {
  constructor() {
    // this.bindActions(StreamActions)
    const timeKeys = Array.from(Array(24).keys())
    const times = {}
    timeKeys.forEach((key) => {
      times[key] = ['hoge', 'fuga']
    })
    this.times = times
    this.loading = false
  }
}

export default alt.createStore(StreamStore, 'StreamStore')
