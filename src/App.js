import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Topbar from "./components/Topbar";
import RenderList from './components/RenderList';
import RenderDates from './components/RenderDates';
import RenderSeats from './components/RenderSeats';

function App() {
  return (
    <BrowserRouter>
      <Topbar>CINEFLEX</Topbar>

      <Routes>
        <Route path='/' element={<RenderList />}/>
        <Route path='/sessoes/:idMovie' element={<RenderDates />}/>
        <Route path='/assentos/:idSessao' element={<RenderSeats/>}/>
      </Routes>

    </BrowserRouter>

  );
}

export default App;
