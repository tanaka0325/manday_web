import request from 'superagent'

import TaskAction from '../actions/TaskActions'

const API_URL = 'http://localhost:9999/tasks'

const TaskSource = {
  fetch: () => {
    request
      .get(API_URL)
      .withCredentials()
      .end((err, res) => {
        if (err) { console.log(err) }
        TaskAction.fetchedTasks(res.body)
      })
  },

  add: (task) => {
    request
      .post(API_URL)
      .withCredentials()
      .send(task)
      .end((err, res) => {
        if (err) { console.log(err) }
        TaskAction.addedTask(res.body)
      })
  },

  delete: (id) => {
    request
      .delete(`${API_URL}/${id}`)
      .withCredentials()
      .end((err) => {
        if (err) { console.log(err) }
        TaskAction.sync()
      })
  },
}

export default TaskSource
