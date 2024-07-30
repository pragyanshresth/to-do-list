import { useState } from "react";
import "./About.css"; 

const About = () => {
  const [inputValue, setInputValue] = useState("");
  const [task, setTask] = useState([]);
  const [editing, setEditing] = useState(false);

  const inputHandler = (e) => {
    setInputValue(e.target.value);
  };

  const buttonHandler = () => {
    if(editing){setTask(task.map((item,index) => index===task ? inputValue: item));
      setEditing(false);
    }
    else{
      setTask([...task, inputValue]);
    }
    setInputValue("");
   
  };

  const deleteHandler = (index) => {
    setTask(task.filter((item, i) => i!== index));
  };

  const editHandler = (index) => {
    setInputValue(task[index]);
    setEditing(true);
    setTask(index);
  };

  const saveHandler = (index) => {
    const newTask = [...task];
    newTask[index] = inputValue;
    setTask(newTask);
    setEditing(null);
    setInputValue("");
  };

  return (
    <>
      <h1 className="title">To do list</h1>
      <input
        className="input-field"
        placeholder="Enter your task here"
        onChange={inputHandler}
        value={editing!== null? task[editing] : inputValue}
      />
      <button className="add-button" onClick={buttonHandler}>
        Add Task
      </button>
      <br />
      <br />
      <h4 className="task-list-header" style={{ color: "BLUE" }}>
        Here is the list of your task:
      </h4>

      {task.length === 0? (
        <h4 className="no-task-message">No task in the list</h4>
      ) : (
        task.map((item, index) => (
          <div key={index} className="task-item-container">
            <h5 className="task-item">
              {index + 1}. {item}
            </h5>
            {editing === index? (
              <button className="save-button" onClick={() => saveHandler(index)}>
                Save
              </button>
            ) : (
              <>
                <button
                  className="edit-button"
                  onClick={() => editHandler(index)}
                >
                  Edit
                </button>
                <button
                  className="delete-button"
                  onClick={() => deleteHandler(index)}
                >
                  Delete
                </button>
              </>
            )}
          </div>
        ))
      )}
    </>
  );
};

export default About;