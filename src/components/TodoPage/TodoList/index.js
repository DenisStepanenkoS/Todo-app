
import styles from './css/styles.module.css';
import TodoListForm from './TodoListForm';
function TodoList() {
    
    return (
    <div className={styles.todoList}> 
        <h1 className={styles.name}>TODO APP</h1>
        <TodoListForm/>
    </div>
    );
}


export default (TodoList)