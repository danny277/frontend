import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import {BrowserRouter, Navigate, Routes, Route} from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Notfound from './components/Notfound';
import EventHandling from './components/EventHandling';
import {Toaster} from 'react-hot-toast';



function App() {
  return (
    <div >
      <Toaster position='top-center' />
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route element={<Navigate to="/Home" />} path='/' />
        <Route element={<Home />} path='home' />
        <Route element={<Login />} path='login' />
        <Route element={<Signup />} path='signup' />
        <Route element={<EventHandling />} path='event' />
        <Route element={<Notfound />} path='*' />
        
        </Routes>
        </BrowserRouter>
     
    </div>
  );
}

export default App;
