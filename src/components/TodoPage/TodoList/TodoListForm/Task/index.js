import { connect } from 'react-redux';
import {deleteTask} from '../../../../../store/Slices/todoList';
import styles from './css/styles.module.css';
function Task({task, deleteTask}) {
  console.log(task);
  return (
    <div className={styles.task}>
        <div>{task.newTask}</div>
        <div className={styles.deadline}>{task.deadline}</div>
        <button className={styles.deleteButton}onClick={() => deleteTask(task.id)}>-</button>
        
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
    deleteTask: (id) => dispatch(deleteTask(id)),
})

export default connect(null ,mapDispatchToProps)(Task)