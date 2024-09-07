import { ItemDetailContainer } from "./assets/components/ItemDetailContainer.jsx";
import { ItemListContainer } from "./assets/components/ItemListContainer.jsx";
import { Navbar } from "./assets/components/NavBar.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

export function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar titulo="Dietetica Isabelles" />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/categoria/:categoria" element={<ItemListContainer />} />
          <Route path="/detalles/:id" element={<ItemDetailContainer />} />
          <Route path="*" element={<h2>No encontrado</h2>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;