import { Header } from './components/Header';
import { Home } from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TrigonometryCategory } from './pages/TrigonometryCategory';
import { RightTriangle } from './components/sub-categories/RightTriangle';
export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/trigonometry' element={<TrigonometryCategory />}></Route>
        <Route path='/trigonometry/right' element={<RightTriangle />}></Route>
      </Routes>
    </Router>
  );
};
