import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";

function App() {
  return (
    <>
      <Router basename="/Movies-ReactJS">
        <Routes>
          <Route path="/" element = {<Home/>}/>
          <Route path="/sign-in" element = {<Login/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
