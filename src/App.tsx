import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Company from './pages/Company'
import Contact from "./pages/Contact";
import NewProject from "./pages/NewProject";
import Container from "./components/layout/Container";
import Navbar from "./components/layout/Navbar";
import Projects from "./pages/Projects";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Container customClass="min-height">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/company" element={<Company />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/new-project" element={<NewProject />}></Route>
            <Route path="/projects" element={<Projects />}></Route>
          </Routes>
        </Container>
      </Router>
      <Footer/>
    </>
  )
}

export default App

