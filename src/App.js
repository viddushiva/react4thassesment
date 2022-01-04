import './App.css';
import Home from './Components/Home';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom' 
import Homee from './Components/Homee';
import Student from './Components/Student';
import Contact from './Components/Contact';


function App() {
  return (
    <div className="App">
      <Router>
        <Home/>

        <Routes>
          {/* <Route path="/" element={<Home/>} /> */}
          <Route path="/homee" element={<Homee/>} />
          <Route path="/student" element={<Student/>} />
          <Route path="/contact" element={<Contact/>} />      
        </Routes>
        
      </Router>
    </div>
  );
}

export default App;
