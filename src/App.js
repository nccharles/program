import "./App.css";
import React, { useState } from "react";

const App = () => {
  const [program, setProgram] = useState([]);
  const [name, setName] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    if(name===""){
    return  alert("Please Enter the Program")
    }
    e.target.reset();
    const newArr = [name];
    setName("");
    setProgram((p) => [...p, newArr]);
  };
  const onChange = (e) => {
    setName(e.target.value);
  };
  const Array = program.map((i) => <li>{i}</li>);
  return (
    <div className="App">
      <form onSubmit={onSubmit}>
        <label>Programme: </label>
        <input type="text" name="name" autoFocus={true} onChange={onChange} />
        <button>Ajouter</button>
      </form>
      <h1>Liste des programmes: </h1>
      <ul>{Array}</ul>
    </div>
  );
};

export default App;
