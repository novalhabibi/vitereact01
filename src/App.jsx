// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Catalog from "./pages/public/Catalog";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Catalog />} />
        {/* Nanti tinggal tambah route lain kayak /tentang, /login, /dashboard */}
      </Routes>
    </Router>
  );
}

export default App;
