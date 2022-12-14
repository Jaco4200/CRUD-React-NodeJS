import {BrowserRouter, Routes, Route,} from 'react-router-dom';
import Profil from './pages/profil';
import Menu from './pages/menu';
import Home from './pages/home';
import Bekraft from './pages/bekraft';
import Kontakt from './pages/kontakt';
import Admin from './pages/admin';
import '../src/scss/style.scss'
function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/Profil" element={<Profil/>}/>
            <Route path="/Menu" element={<Menu/>}/>
            <Route path="/Kontakt" element={<Kontakt/>}/>
            <Route path="/Bekraeft" element={<Bekraft/>}/>
            <Route path="/Admin" element={<Admin/>}/>
            <Route path="/" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
