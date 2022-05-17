import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Topbar from "./components/Topbar";
import RenderList from './components/RenderList';

function App() {
  return (
    <BrowserRouter>
      <Topbar />

      <Routes>
        <Route path='/' element={<RenderList />}/>
      </Routes>

    </BrowserRouter>

  );
}

export default App;
