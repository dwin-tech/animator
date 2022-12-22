
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Episode_1 } from './components/Episode_1';
import { Episode_2 } from './components/Episode_2';



function App() {

  return (


    <Routes>
      <Route path="/" element={<Episode_1 />} />
      <Route path="/episode_2" element={<Episode_2 />} />
    </Routes>
  )
 
}

export default App;
