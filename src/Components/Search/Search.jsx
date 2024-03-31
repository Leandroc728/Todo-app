import React from 'react'
import "./Search.css"

function Search({ search, updateSearch }) {

    const handleChange = (e) => {
        updateSearch(e.target.value)
    }

    return (
        <div className="search-div">
            <input onChange={(e) => handleChange(e)} type="text" name="" id="" placeholder="Procure pelo titulo da tarefa" />
        </div>
    )
}

export default Search