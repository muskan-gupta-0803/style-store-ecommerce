import "./App.css";
import { Routes, Route } from "react-router-dom";
// import Homepage  from "./pages/Homepage/Homepage.js";
import {Homepage, ProductPage, Wishlist, Cart} from "./pages";

import Navbar from "./components/Navbar/Navbar.js";
import Footer from "./components/Footer/Footer.js";

function App() {
  return (
    <div className="App">   

      <Navbar /> 
      <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
      <Footer />

    </div>
  );
}

export default App;
