import Api from '../utils/apiUtils'
import TaskAction from '../actions/TaskActions'

const API_URL = 'http://localhost:9999/tasks'

const TaskSource = {
  fetchAt: (date) => {
    Api.ajaxGet(`${API_URL}/date/${date}`)
      .then(TaskAction.fetchedTasks)
  },

  add: (task) => {
    Api.ajaxPost(API_URL, task)
      .then(TaskAction.addedTask)
  },

  delete: (id) => {
    Api.ajaxDelete(`${API_URL}/${id}`)
  },
}

export default TaskSource
