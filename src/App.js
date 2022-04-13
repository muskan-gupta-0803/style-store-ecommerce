import "./App.css";

import Homepage  from "./pages/Homepage/Homepage.js";

import Navbar from "./components/Navbar/Navbar.js";
import Footer from "./components/Footer/Footer.js";

function App() {
  return (
    <div className="App">   

      <Navbar /> 
      <Homepage />
      <Footer />

    </div>
  );
}

export default App;
