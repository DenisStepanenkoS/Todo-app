import { connect } from 'react-redux';
import styles from './css/styles.module.css';
import { useEffect, useState } from 'react';
import Task from './Task';
import {addTask} from './../../../../store/Slices/todoList';
import { ErrorMessage, Field, Form, Formik} from 'formik';
import {NEW_TASK_VALIDATION_SCHEMA} from '../../../../Utils/ValidastionSchema';
function TodoListForm({tasks, addTask}) {

    const initialValues = {newTask: '', deadline: ''}
    

    const handleSubmit = (values, formikBag) =>{
        addTask(values)
        
        formikBag.resetForm();
    }

  return (
    <Formik 
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={NEW_TASK_VALIDATION_SCHEMA}
      >

        <Form>
        <div className={styles.addNewTask}>
            <Field placeholder='task text' name='newTask' className={styles.inputTask}/>
            <ErrorMessage name='newTask' component='span'className={styles.error}/>
            
            <Field type='time' name='deadline' className={styles.inputTask}/>
            <ErrorMessage name='deadline' component='span' className={styles.errorDeadline}/>
            
            <button type='submit' className={styles.addButton}>+</button>
        </div>
        {tasks.length > 0?(
            <ul>
                {tasks.map(task => (
                    <li className={styles.task} key = {task.id}>
                        <Task task={task}/>
                    </li>
                ))}
            </ul>
        ):(<></>)}
        </Form>
    </Formik>
  )
}
const mapStateToProps = ({tasksList})=> tasksList;

const mapDispatchToProps = dispatch => ({
    addTask:(value) => dispatch(addTask(value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoListForm)