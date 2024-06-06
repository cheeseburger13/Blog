import "./styles/const.css"
import "./styles/main.css"

import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className = "wrapper">
      <Header />
      <main className = "main"></main>
      <Footer />
    </div>
  );
}

export default App;
