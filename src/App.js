  import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
  import './App.css';

  import Home from './Pages/Home';
  import AboutUs from './Pages/AboutUs';
  import Programs from './Pages/Programs';
  import Login from './Pages/Login';
  import SignUp from './Pages/SignUp';
  import Contacts from './Pages/Contacts';
  import SmartEats from './Pages/SmartEats';
  import Navbar from './Components/Navbar';
  import Blogs from './Pages/Blogs';
  import CardioTraining from './Pages/Programs/CardioTraining';


  function App() {
    return (
      <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/smarteats" element={<SmartEats />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/programs/cardiotraining" element={<CardioTraining />} />
          </Routes>
        </Router>
      </div>
    );
  }

  export default App;
