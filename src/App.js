import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Homes/Home";
import Footer from "./components/Homes/Footer";
import Products from "./components/Products/Products";
import Spirit from "./components/Products/Spirit";
import Wine from "./components/Products/Wine";
import Pharma from "./components/Products/Pharma";
import Olive from "./components/Products/Olive";
import PrintedSheets from "./components/Products/PrintedSheets";

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Routes>

          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/spiritclosures" element={<Spirit />} />
          <Route path="/products/wineclosures" element={<Wine />} />
          <Route path="/products/pharmaclosures" element={<Pharma />} />
          <Route path="/products/oliveoilclosures" element={<Olive />} />
          <Route path="/products/printedmetalsheets" element={<PrintedSheets />} />
          
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;
