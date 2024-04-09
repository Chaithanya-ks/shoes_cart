import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import HeroSection from './components/Hero';
import Login from './components/login';
import Navigation from './components/navigation';
import Menu from './components/menu';
import AboutPage from './components/about';
import ContactPage from './components/contact';
import Shop2 from './components/shop2';
import Shop3 from './components/shop3';
import Shop4 from './components/shop4';
import Shop1 from './components/shop1';
import Registration from './components/RegistrationPage';

function App() {
  return (
    <>
    <Navigation/>
   
    <Routes>
      <Route exact path="/" element={<HeroSection />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/menu" element={<Menu/>}/>
      <Route exact path='/about' element={<AboutPage/>}/>
      <Route exact path='/contact' element={<ContactPage/>}/>
      <Route exact path='/shop1' element={<Shop1/>}/>
      <Route exact path='/shop2' element={<Shop2/>}/>
      <Route exact path='/shop3' element={<Shop3/>}/>
      <Route exact path='/shop4' element={<Shop4/>}/>
      <Route exact path='/RegistrationPage' element={<Registration/>}/>
    </Routes>
    </>
  );
}

export default App;
