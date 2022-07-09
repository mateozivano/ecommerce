import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ItemListContainer from "./componentes/container/ItemListContainer";
import Titulo from "./componentes/container/titulo";
import NavBar from "./componentes/navbar/navbar";
import Cart from "./componentes/container/Cart";
import ItemDetailContainer from "./componentes/container/ItemDetailContainer";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";








function App() {

  const objStyle = { color: "white", backgroundColor: "black", fontSize: 50 };

  return (
    <BrowserRouter>
      <section>
        <div style={objStyle} className="App">
          <NavBar />
        </div>
        <Routes>
          <Route index path="/" element={<ItemListContainer greeting={'itemlistcontainer'} />} />
          <Route  path="/detalle/:id" element={<ItemDetailContainer />}/>
          <Route path="/cart" element={<Cart />}/>
          <Route path="*" element={<Navigate to="/"/>}/>
          {/* 
          <Titulo titulo="Bebidas disponibles" />
          
           */} 

        </Routes>




      </section>
    </BrowserRouter>
  );
}

export default App;
