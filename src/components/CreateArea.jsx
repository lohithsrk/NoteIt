import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const [isExpanded, setIsExpanded] = useState(false)

  function handleChange(event) {
    const {name, value} = event.target;
    setNote(prevNote => {
        return {
            ...prevNote,
            [name]: value
        }
    })
  }

  function handleClick() {
    setIsExpanded(true)
  }

  function submitNote(event) {
    props.onAdd(note)
    setNote(() => {
        return {
        title: "",
        content: "",
      }})
    event.preventDefault()
  }

  return (
    <div>
      <form className='create-note'>
        {isExpanded && 
        <input
          type="text"
          name="title"
          value={note.title}
          placeholder="Title"
          onChange={handleChange}
        />}
        <textarea
          name="content"
          value={note.content}
          placeholder="Take a note..."
          onChange={handleChange}
          onClick={handleClick}
          rows={isExpanded ? '3' : '1'}
        />
        
        <Zoom in={isExpanded &&'true'}>
        <Fab onClick={submitNote}>
          <AddIcon />
        </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
