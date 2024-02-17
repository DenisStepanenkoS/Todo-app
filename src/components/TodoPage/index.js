import styles from './css/styles.module.css'
import TodoList from './TodoList'

function TodoPage() {
  return (
    <main className={styles.todoList}>
      
      <TodoList/>
    </main>
  )
}

export default TodoPage