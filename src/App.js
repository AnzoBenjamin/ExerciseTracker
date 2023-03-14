import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import ExercisesList from "./components/ExercisesList";
import EditExercises from "./components/EditExercises";
import CreateExercise from "./components/CreateExercise";
import CreateUser from "./components/CreateUser";

function App() {
  return (
    <Router>
      <div className="container">
      <Navbar />

      </div>
      <br />
      <Routes>
        <Route path="/" exact Component={ExercisesList} />
        <Route path="/edit/:id" Component={EditExercises} />
        <Route path="/create" Component={CreateExercise} />
        <Route path="/user" Component={CreateUser} />
      </Routes>
    </Router>
  );
}

export default App;
