import Api from '../utils/apiUtils'
import TaskAction from '../actions/TaskActions'

class TaskSource {
  static API_URL = 'http://localhost:9999/tasks'

  static fetchAt(date) {
    Api.ajaxGet(`${this.API_URL}/date/${date}`)
      .then(TaskAction.fetchedTasks)
  }

  static add(task) {
    Api.ajaxPost(this.API_URL, task)
      .then(TaskAction.addedTask)
  }

  static delete(id) {
    Api.ajaxDelete(`${this.API_URL}/${id}`)
  }
}

export default TaskSource
