import React, { useState, useEffect } from 'react'
import "./Tasks.css"
import Todo from './Todo/Todo'

function Tasks({ tasks, updateTasks, search, filter, sort }) {

    const handleDelete = (index) => {
        const filteredTasks = tasks.filter((_, i) => i != index)
        updateTasks(filteredTasks)
    }

    const handleTextBoxChange = (index) => {
        const taskCopy = [...tasks]
        taskCopy[index].isCompleted = !taskCopy[index].isCompleted
        updateTasks(taskCopy)
    }

    return (
        <div className="tasks-container">
            {tasks
            .filter((task) => task.title.toLowerCase().includes(search.toLowerCase()))
            .filter((task) => {
                if(filter === "Todas") {
                    return task
                } else if(filter === "Completas") {
                    return task.isCompleted
                } else if(filter === "Incompletas") {
                    return !task.isCompleted
                }
            })
            .sort((a, b) => sort === "Ascen" ? a.title.localeCompare(a.title) : a.title.localeCompare(b.title))
            .map((t, index) => {
                return <Todo tasks={tasks} t={t} index={index} boxChange={handleTextBoxChange} deleteTask={handleDelete} />
            })}
        </div>
    )
}

export default Tasks