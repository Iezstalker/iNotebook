import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoPage from "./components/NoPage";
import NoteState from "./context/Notes/NoteState";
import { Alert } from "./components/Alert";

function App() {
  return (
    <div className="App">
      <>
        <NoteState>
          <BrowserRouter>
            <Navbar />
            <Alert message= "Hi!!"/>
            <div className="container">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="About" element={<About />} />
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
