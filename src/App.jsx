import "./styles/const.css"
import "./styles/all.css"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./pages/Main";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Search from "./pages/Search";

function App() {
  return (
    <div className="wrapper">
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contacts" element={<Contacts />}></Route>
          <Route path="/search" element={<Search />}></Route>
        </Routes>
        
        <Footer />
      </Router>

    </div>
  );
}

export default App;
