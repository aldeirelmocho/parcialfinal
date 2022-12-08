import "./App.css";
import Header from "./Header";
import Centro from "./Centro";
import Inferior from "./Inferior";
import Inicio from "./paginas/Inicio";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Fin from "./paginas/fin";
import Acerca from "./paginas/acerca";
import WebcamCapture from "./camara";


function App() {
  return (
    <div className="">

      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/Inicio" element={<Inicio />} />
          <Route path="acerca" element={<Acerca />} />
          <Route path="/fin" element={<Fin />} />
          <Route path="/camara" element={<WebcamCapture />} />
        </Routes>
      </BrowserRouter>
      
      <h2 className="h2">FUNDACION DE DONACIONES LA VIDA</h2>
      <div className="imagenprese">
        <img alt="ff" src="https://funproyesi.com/web/images/donaciones/img-titulo-donaciones.png"></img>
      </div>

      <Centro />

      <Inferior />

    </div>
  );
}

export default App;
