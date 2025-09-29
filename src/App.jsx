import './App.css'
import NavBar from './components/NavBar.jsx'
import { Banner } from './components/Banner'
import { AboutUs } from './components/AboutUs.jsx'
import { Projects } from "./components/Projects.jsx";
import { Contact } from './components/Contact.jsx'
import Login from './components/Login.jsx'
import Sixth from './components/Sixth.jsx'   // ⬅️ Import Sixth.jsx
import Seventh from './components/Seventh.jsx'   // ⬅️ Import Sixth.jsx
import Eight from './components/Eight.jsx'   // ⬅️ Import Sixth.jsx
import Ninth from './components/Ninth.jsx'   // ⬅️ Import Sixth.jsx
import Tenth from './components/Tenth.jsx'   // ⬅️ Import Sixth.jsx
import Eleventh from './components/Eleventh.jsx'   // ⬅️ Import Sixth.jsx
import Twelveth from './components/Twelveth.jsx'   // ⬅️ Import Sixth.jsx
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banner />
              <AboutUs />
              <Projects />
              <Contact />
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/games/6th" element={<Sixth />} />
        <Route path="/games/7th" element={<Seventh />} />
        <Route path="/games/8th" element={<Eight />} />
        <Route path="/games/9th" element={<Ninth />} />
        <Route path="/games/10th" element={<Tenth />} />
        <Route path="/games/11th" element={<Eleventh />} />
        <Route path="/games/12th" element={<Twelveth />} />
          <Route
          path="/read"
          element={
            <iframe
              src="/Read.html"
              style={{ width: "100%", height: "100vh", border: "none" }}
              title="Read Page"
            />
          }
        />
      </Routes>
    </div>
  )
}

export default App
