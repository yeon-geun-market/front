import { Header } from './layouts';
import { Home, ItemDetail } from './pages';
import './index.css';
import styles from './App.module.scss';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/items/:id' element={<ItemDetail />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
