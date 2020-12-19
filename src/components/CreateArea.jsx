import React,{useState} from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

  function CreateArea(props) {
  const [isExpand,setisExpand]=useState(false);
    const [note,setNote]=useState({
    title:"",
    content:""
  });

  function handleChange(event){
    const {name,value}=event.target;
    setNote(prevValue=>{return {...prevValue,[name]:value};});
  }
  
  function onClick(event){
    props.fun1(note);
    setNote({
      title: "",
      content: ""
    });
  event.preventDefault();
  }
  function expand(){
    setisExpand(true);
  }
  return (
    <div>
      {/* <form onSubmit={props.fun2}>
        <input onChange={props.fun} name="title" placeholder="Title" />
        <textarea onChange={props.fun} name="content" placeholder="Take a note..." rows="3" />
        <button type="submit">Add</button>
      </form> */}
      <form className="create-note">
        {isExpand ? (
          <input 
        onChange={handleChange} 
        value={note.title}
         name="title" 
         placeholder="Title" />
         ) : null }
        <textarea onChange={handleChange} onClick={expand}  value={note.content} name="content" placeholder="Take a note..." rows={isExpand ? 3 : 1 }/>
       <Zoom in={isExpand}>
        <Fab onClick={onClick} type="submit"><AddIcon /></Fab>
        </Zoom>
      </form> 
    </div>
  );
}

export default CreateArea;
