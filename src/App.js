import React, {useState} from "react";
import './App.css';
import Note from "./components/Note";

function App() {
  const [text, setText] = useState("");
  const [notes, setNotes] = useState([{text:"Hello World!"},{text:"ToDoList App"}]);

  function handleChange(event) {
    setText(event.target.value);
  }

  function addItem() {
    setNotes((prevNotes) => {
      return [...prevNotes,{text}];
    });
  }

  function deleteItem(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((note, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="App">
      <h1>To Do List App</h1>
      <form className='form' autoComplete='off'>
        {
          notes.map((note, index) => {
            return <Note text={note.text} key={index} id={index} onDelete={() => {deleteItem(index)}}/>
          })
        }
        <div>
          <input type="text" name='noteText' onChange={handleChange} value={text} className='textBox' placeholder='Leave a note...'/>
          <button onClick={(event) => {
            addItem();
            setText("");
            event.preventDefault();
          }}>+</button>
        </div>
      </form>
    </div>
  );
}

export default App;
