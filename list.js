import React, { useState, useEffect } from "react";
import './list.css'

// ---- adding task ------
function List() {
  const [task, setTask] = useState("");
  const [list, setList] = useState(() => {
    const savedItem = localStorage.getItem("list");
    const parsedItem = JSON.parse(savedItem);
    return parsedItem || [];
  });

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  const changeHandler = (e) => {
    setTask(e.target.value);
  };
  const addTodo = () => {
    if (task !== "" && list.includes(task) == false && done.includes(task)==false) {
      list.push(task);
      setList([...list]);
      setTask("");
    }
  };

// ----- deleting task ----
  const deleteHandler = () => {
    setList((list) => list.filter((_, index) => index !== 0));
  };

// ----- task done -------  
  const [done, setDone] =  useState(() => {
    const taskDone = localStorage.getItem("taskDone");
    const doneList = JSON.parse(taskDone);
    return doneList || [];
  });

  useEffect(() => {
    localStorage.setItem("taskDone", JSON.stringify(done));
  }, [done]);

  const handleCheck = (e)=>{
    if(e.target.checked){
done.push(e.target.value)
setDone([...done])
    }
    else{
      done.splice(done.indexOf(e.target.value),1)
      setDone([...done])
    }
  }

  const isChecked = (i) => done.includes(i) ? "checked-item" : "not-checked-item";

  var checkedItems = done.length ? done.reduce((total, i) => {
      return total + ", " + i;
    }) : "";
  
  return (
    <div className="container-fluid">
      <span>Total pending tasks are : -{list.length}</span>
      <div>
        <input
          type="text"
          value={task}
          placeholder="enter new task"
          onChange={(e) => changeHandler(e)}
        ></input>
        <button className="btn btn-primary" onClick={addTodo}>
          Add Task
        </button>
      </div>
      <div className="row">
        <ul className="list-group">
          {list.map((i, index) => {
            return (
              <li
                id={index}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <input type="checkbox" value={i} onClick={handleCheck} checked={ done.includes(i) }/>
                <span className={isChecked(i)}>{i}</span>
                <button
                  class="badge bg-danger rounded-pill"
                  onClick={() => {
                    deleteHandler(index);
                  }}
                >
                  &times;
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      <div>
  {`Total Tasks done are: ${done.length} ---  ${checkedItems}`}
</div>
    </div>
  );
}
export default List;