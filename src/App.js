import { useState } from 'react';
import './App.css';
import Tasks from './Components/Tasks/Tasks';
import Search from './Components/Search/Search';
import AddTask from './Components/AddTask/AddTask';
import Filter from './Components/Filter/Filter';

function App() {

  const [tasks, updateTasks] = useState([{title: "Exemplo1", category: "Trabalho", isCompleted: false}, {title: "Exemplo2", category: "Casa", isCompleted: false}])
  const [search, updateSearch] = useState("")
  const [filter, updateFilter] = useState("Todas")
  const [sort, setSort] = useState("Ascen")

  return (
    <main className="main">
      <Search search={search} updateSearch={updateSearch} />
      <Filter state={filter} updateFilter={updateFilter} setSort={setSort} />
      <Tasks tasks={tasks} updateTasks={updateTasks} search={search} filter={filter} sort={sort} />
      <AddTask updateTask={updateTasks} />
    </main>
  );
}

export default App;
