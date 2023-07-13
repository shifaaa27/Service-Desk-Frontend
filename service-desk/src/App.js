import logo from './logo.svg';
import ReactDOM from "react-dom/client";
import './App.css';
import Dashboard from './dashboard';
import Error404 from './error404';
import Login from './login';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}/>
        <Route path='/login' element={<Login/>}/>
        <Route path="*" element={<Error404/>} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
