
import './App.css';
import ComponenteContenedor from './componentes/container/CoponenteContenedor';

import NavBar from "./componentes/navbar/navbar";


function App() {

  const objStyle = {color: "white", backgroundColor: "black", fontSize: 50};

  return (
    
    <div style={objStyle} className="App">
      <NavBar/>
      <ComponenteContenedor/>
      <ComponenteContenedor/>
      <ComponenteContenedor/>
      <ComponenteContenedor/><ComponenteContenedor/>
      
      

     
    </div>
  );
}

export default App;
