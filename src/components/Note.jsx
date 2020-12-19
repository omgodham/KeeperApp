import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';
function Note(props) {

function onDelete(){
props.fun3(props.id);
}

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      {/* <button onClick={()=>{
      props.fun3(props.id);
      }}>DELETE</button> */}
      <button onClick={onDelete}><DeleteIcon /></button>
    </div>
  );
}

export default Note;
