import React from 'react'

function Todo({  t, index, boxChange, deleteTask }) {

    return (
        <div key={index} className="task" >
            <div className="task-text" id={index} style={t.isCompleted ? {textDecoration: 'line-through'} : {textDecorationLine: "none"}}>
                <div>
                    <h3>{t.title}</h3>
                </div>
                
                <div>
                    <p>{t.category}</p>
                </div>
            </div>
            <div className="task-actions">
                <button onClick={() => deleteTask(index)}>Deletar</button>
                <button onClick={() => boxChange(index)} name="" id="">Completar</button>
            </div>
        </div>
    )
}

export default Todo