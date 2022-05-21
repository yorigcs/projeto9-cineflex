import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Topbar from "./components/Topbar";
import RenderList from './components/RenderList';
import RenderDates from './components/RenderDates';
import RenderSeats from './components/RenderSeats';
import RenderSucess from './components/RenderSucess';

function App() {
  const [sucessInfo,SetSucessInfo] = useState({});
  return (
    <BrowserRouter>
      <Topbar>CINEFLEX</Topbar>

      <Routes>
        <Route path='/' element={<RenderList />}/>
        <Route path='/sessoes/:idMovie' element={<RenderDates />}/>
        <Route path='/assentos/:idSessao' element={<RenderSeats SetSucessInfo={SetSucessInfo}/>}/>
        <Route path= '/sucesso' element={<RenderSucess sucessInfo={sucessInfo}/>}/>
      </Routes>

    </BrowserRouter>

  );
}

export default App;
