
import './App.css';
import ItemListContainer from "./componentes/container/ItemListContainer";
import Titulo from "./componentes/container/titulo";
import NavBar from "./componentes/navbar/navbar";


function App() {

  const objStyle = {color: "white", backgroundColor: "black", fontSize: 50};

  return (
    
    <div style={objStyle} className="App">
      <NavBar/>
      <Titulo titulo="ron"/>
      <ItemListContainer tituloITC="Capitan morgan" subTituloITC="1400"/>
      <ItemListContainer tituloITC="Havanna club" subTituloITC="2300"/>
      <ItemListContainer tituloITC="Bacardi" subTituloITC="2000"/>
      <ItemListContainer tituloITC="Malibu" subTituloITC="1000"/>
      
      

     
    </div>
  );
}

export default App;
