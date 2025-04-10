import { Header } from './layouts';
import { Home } from './pages';
import './index.css';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
