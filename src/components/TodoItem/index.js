import './index.css'

const TodoItem = props => {
  const {todoDetails, count, onDeleteTodo} = props
  const {id, name, project, task, status, start, end} = todoDetails

  const onClickButton = () => {
    onDeleteTodo(id)
  }

  return (
    <tr>
      <th scope="row">{count}</th>
      <td>{name}</td>
      <td>{project}</td>
      <td>{task}</td>
      <td>{status}</td>
      <td>{start}</td>
      <td>{end}</td>
      <td>
        <button type="button" className="button" onClick={onClickButton}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
            className="icon"
          />
        </button>
      </td>
    </tr>
  )
}

export default TodoItem
