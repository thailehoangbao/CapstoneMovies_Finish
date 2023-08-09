import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import renderRoutes from './routes/Routes';
import { Suspense } from 'react';

function App() {
  return (
    //fallback để components loading
    <Suspense fallback={<div>Loading....</div>}>
      <BrowserRouter>
        <Routes>
          {renderRoutes()}
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
