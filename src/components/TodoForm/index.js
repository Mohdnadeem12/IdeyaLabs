/* eslint-disable jsx-a11y/label-has-associated-control */
import './index.css'

import {useState} from 'react'
import {v4 as uuid} from 'uuid'

import TodoItem from '../TodoItem'

const initialValue = {
  personName: '',
  email: '',
  mobileNumber: '',
  project: '',
  task: '',
  start: '',
  end: '',
  status: '',
}

const TodoForm = () => {
  const [formValues, setFormValues] = useState(initialValue)
  const [todoList, setTodoList] = useState([])
  const [count, setCount] = useState(0)

  const [formErrors, setFormErrors] = useState({})

  const validate = values => {
    const error = {}
    const nameValidate = /^[a-zA-Z]+$/g
    const mobileValidate = /^[0-9\b]+$/
    const emailValidate = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i

    if (values.personName.length < 3) {
      error.personName = 'Person Name should be more than 3 characters'
    }
    if (values.personName.length > 20) {
      error.personName = 'Person Name cannot exceed 20 characters'
    }
    if (!nameValidate.test(values.personName)) {
      error.personName = 'Person name should contains only Characters'
    }

    if (values.mobileNumber.length > 10) {
      error.mobileNumber = 'Mobile Number cannot exceed 10 characters'
    } else if (!mobileValidate.test(values.mobileNumber)) {
      error.mobileNumber = 'Not a valid mobile number'
    }

    if (values.project.length < 3) {
      error.project = 'Project Name should be more than 3 characters'
    } else if (values.project.length > 20) {
      error.project = 'Project Name cannot exceed 20 characters'
    }
    if (values.task.length < 3) {
      error.task = 'Task Name should be more than 3 characters'
    } else if (values.task.length > 20) {
      error.task = 'Task Name cannot exceed 20 characters'
    }
    if (!emailValidate.test(values.email)) {
      error.email = 'Email is not valid'
    }
    return error
  }

  const handleOnChangeInput = event => {
    const {name, value} = event.target
    setFormValues({...formValues, [name]: value})
    setFormErrors(validate(formValues))
  }

  const onDelete = id => {
    const newTodos = [...todoList]

    const index = todoList.findIndex(eachTodo => eachTodo.id === id)
    newTodos.splice(index, 1)
    setTodoList(newTodos)
  }

  const onSubmitForm = e => {
    e.preventDefault()
    const newTodo = {
      id: uuid(),
      name: formValues.personName,
      project: formValues.project,
      task: formValues.task,
      status: formValues.status,
      start: formValues.start,
      end: formValues.end,
    }
    const newTodos = [...todoList, newTodo]
    setTodoList(newTodos)
    setFormValues(initialValue)

    setCount(todoList.length)
  }

  return (
    <div>
      <form className="app-container" onSubmit={onSubmitForm}>
        <h1 className="text-center">Todo List</h1>
        <label htmlFor="personName" className="form-label">
          Person Name
        </label>
        <input
          type="text"
          className="form-control"
          id="personName"
          placeholder="Person Name"
          name="personName"
          value={formValues.personName}
          onChange={handleOnChangeInput}
        />
        <p className="error">{formErrors.personName}</p>
        <div className="row g-3 my-4">
          <div className="col">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="text"
              id="email"
              className="form-control"
              placeholder="Email Id"
              name="email"
              value={formValues.email}
              onChange={handleOnChangeInput}
            />
            <p className="error">{formErrors.email}</p>
          </div>
          <div className="col">
            <label htmlFor="mobileNumber" className="form-label">
              Mobile Number
            </label>
            <input
              type="text"
              id="mobileNumber"
              className="form-control"
              placeholder="Mobile Number"
              name="mobileNumber"
              value={formValues.mobileNumber}
              onChange={handleOnChangeInput}
            />
            <p className="error">{formErrors.mobileNumber}</p>
          </div>
        </div>
        <div>
          <label htmlFor="project" className="form-label">
            Project Name
          </label>
          <input
            type="text"
            className="form-control"
            id="project"
            placeholder="Project Name"
            name="project"
            value={formValues.project}
            onChange={handleOnChangeInput}
          />
          <p className="error">{formErrors.project}</p>
        </div>
        <div className="my-4">
          <label htmlFor="task" className="form-label">
            Task Description
          </label>
          <input
            type="text"
            className="form-control"
            id="task"
            placeholder="Task Description"
            name="task"
            value={formValues.task}
            onChange={handleOnChangeInput}
          />
          <p className="error">{formErrors.task}</p>
        </div>
        <div className="row g-3 my-4">
          <div className="col">
            <label htmlFor="startDate" className="form-label">
              Start Date
            </label>
            <input
              type="date"
              id="startDate"
              className="form-control"
              name="start"
              value={formValues.start}
              onChange={handleOnChangeInput}
            />
          </div>
          <div className="col">
            <label htmlFor="endDate" className="form-label">
              Target Date
            </label>
            <input
              type="date"
              id="endDate"
              className="form-control"
              name="end"
              value={formValues.end}
              onChange={handleOnChangeInput}
            />
          </div>
        </div>
        <div className="task-status-container my-3">
          <h3>Task status: </h3>
          <div className="form-check form-check-inline text-center">
            <input
              className="form-check-input"
              type="radio"
              name="status"
              id="inlineRadio1"
              value="Planned"
              onChange={handleOnChangeInput}
            />
            <label className="form-check-label" htmlFor="inlineRadio1">
              Planned
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="status"
              id="inlineRadio2"
              value="In-Progress"
              onChange={handleOnChangeInput}
            />
            <label className="form-check-label" htmlFor="inlineRadio2">
              In-Progress
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="status"
              id="inlineRadio3"
              value="Done"
              onChange={handleOnChangeInput}
            />
            <label className="form-check-label" htmlFor="inlineRadio3">
              Done
            </label>
          </div>
        </div>
        <div className="buttons-container">
          <button type="submit" className="btn btn-primary">
            Save
          </button>
          <button type="button" className="btn btn-info">
            View
          </button>
        </div>
      </form>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">S.No</th>
            <th scope="col">Name</th>
            <th scope="col">Project</th>
            <th scope="col">Task</th>
            <th scope="col">Status</th>
            <th scope="col">Start Date</th>
            <th scope="col">End Date</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>

        <tbody>
          {todoList.map(eachTodo => (
            <TodoItem
              key={eachTodo.id}
              todoDetails={eachTodo}
              count={count}
              onDeleteTodo={onDelete}
            />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TodoForm
