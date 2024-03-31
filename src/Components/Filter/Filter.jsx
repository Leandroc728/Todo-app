import React from 'react'
import "./Filter.css"

function Filter({ state, updateFilter, setSort }) {

    const handleFilterChange = (e) => {
        updateFilter(e.target.value)
    }

    return (
        <div className="filters-div">
            <h2>Filtro:</h2>
            <div className="sort-status">
                <div className="status-div">
                    <h3>Status:</h3>
                    <select onChange={(e) => handleFilterChange(e)} value={state} name="" id="">
                        <option value="Todas">Todas</option>
                        <option value="Completas">Completas</option>
                        <option value="Incompletas">Incompletas</option>
                    </select>
                </div>
                <div className="sort-div">
                    <h3>Ordem alfabética:</h3>
                    <div>
                        <button onClick={() => setSort("Ascen")}>Asc</button>
                        <button onClick={() => setSort("Descen")}>Desc</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Filter