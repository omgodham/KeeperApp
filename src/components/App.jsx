import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
// By using array of objects to store Note

const [allNotes,setallNotes]=useState([]);

function handleClick(newNote){
  setallNotes(prevValue=>{return [...prevValue,newNote]});
}
function handleDelete(id){
  setallNotes(prevValue=>{
    return prevValue.filter((value,index)=>{
      return id!==index;
    })
  });
}
//By using direct separate arrays for title and content  
  // const [title, setTitle] = useState("");
  // const [content, setContent] = useState("");
  // const [allTitle, setallTitle] = useState([]);
  // const [allContent, setallContent] = useState([]);
  // function handleChange(event) {

  //   const { value, name } = event.target;
  //   if (name === "title")
  //     setTitle(value);
  //   else
  //     setContent(value);
  // }

  // function handleClick(event) {
  //   setallTitle(prevValue => [...prevValue, title]);
  //   setallContent(prevValue => [...prevValue, content]);
  //   // setTitle("");
  //   // setContent("");
  //   event.preventDefault();

  // }

  // function handleDelete(id){
  //    setallTitle(prevValue => {
  //    return prevValue.filter((value,index)=>
  //       { return id!==index  })});
  //     setallContent(prevValue=>{
  //      return prevValue.filter((value,index)=>
  //       {return id!==index})});
  // }
  return (
    <div>
      <Header />
      {/* <CreateArea fun={handleChange} fun2={handleClick} /> */}
      <CreateArea fun1={handleClick}/> 
      {/* {allTitle.map((eachTitle, index) => {
        var eachContent = allContent[index];
        return (
          <Note key={index} id={index} title={eachTitle} content={eachContent}
           fun3={handleDelete}/>);
      })} */}
{allNotes.map((eachNote,index) => {
  return (
          <Note key={index} id={index} title={eachNote.title} content={eachNote.content}
           fun3={handleDelete}/>);
})}
      <Footer />
    </div>
  );
}

export default App;
