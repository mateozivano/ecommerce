import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ItemListContainer from "./componentes/container/ItemListContainer";
import Titulo from "./componentes/container/titulo";
import NavBar from "./componentes/navbar/navbar";


function App() {

  const objStyle = {color: "white", backgroundColor: "black", fontSize: 50};

  return (
    <section>
    <div style={objStyle} className="App">
      <NavBar />
      </div>
      <Titulo titulo="Bebidas disponibles"/>
      <ItemListContainer />
      
      
      

     
    
    </section>
  );
}

export default App;
