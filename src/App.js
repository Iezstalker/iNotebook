import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoPage from "./components/NoPage";
import NoteState from "./context/Notes/NoteState";
import Alert from "./components/Alert";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { useState } from "react";

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  return (
    <div className="App">
      <>
        <NoteState> {/* It is being used to avail all the state variables in all the components. */}
          <BrowserRouter>
            <Navbar />
            <Alert alert={alert}/>
            <div className="container">
              <Routes>
                <Route path="/" element={<Home showAlert={showAlert}/>}  />
                <Route path="About" element={<About />} />
                <Route path="/login" element={<Login showAlert={showAlert}/>} />
                <Route path="/signup" element={<Signup showAlert={showAlert}/>} />
                <Route path="*" element={<NoPage />} />
              </Routes> 
            </div>
          </BrowserRouter>
        </NoteState>
      </>
    </div>
  );
}

export default App;
