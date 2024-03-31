import React, {useState, createContext} from 'react'
import "./AddTask.css"

function AddTask({updateTask}) {

    const [taskTitle, updateTitle] = useState("")
    const [taskCategory, updateCategory] = useState("")

    const handleTitleChange = (e) => {
        updateTitle(e.target.value)
    }

    const handleCategoryChange = (e) => {
        updateCategory(e.target.value)
    }
    
    const handleSubmit = (e) => {
        if(taskTitle != "" || taskCategory != "") {
            updateTask((t) => [...t, {title: taskTitle, category: taskCategory, isCompleted: false}])
            updateTitle("")
            updateCategory("")
        }
        e.preventDefault()
    }

    return (
        <div className="div-add">
            <h2>Adicionar tarefa</h2>
            <form action="" className="add-task-form" onSubmit={(e) => handleSubmit(e)}>
                <div>
                    <h3>Titulo:</h3>
                    <input value={taskTitle} type="text" name="" id="" placeholder="Insira o titulo da tarefa" onChange={(e) => handleTitleChange(e)} />
                </div>
                <div>
                    <h3>Categoria:</h3>
                    <select value={taskCategory} name="" id="" onChange={(e) => handleCategoryChange(e)}>
                        <option value="">Selecione uma opção</option>
                        <option value="Casa">Casa</option>
                        <option value="Trabalho">Trabalho</option>
                        <option value="Atividades extras">Atividades extras</option>
                        <option value="Academia">Academia</option>
                    </select>
                </div>
                <button type="submit">Adicionar</button>
            </form>
        </div>
    )
}

export default AddTask