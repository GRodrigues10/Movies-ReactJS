import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Main from "./pages/mainApp/Main";

function App() {
  const apiKey = 'ee96350ded551df8af41839e03615c58';
  return (
    <>
      <Router basename="/Movies-ReactJS">
        <Routes>
          <Route path="/" element = {<Home/>}/>
          <Route path="/sign-in" element = {<Login/>}/>
          <Route path='main-app' element = {<Main/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
