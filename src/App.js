
import  Home  from './pages/Home';
import './App.css';
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProjectDisplay from './pages/ProjectDisplay';
import Resume from './pages/Resume';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar /> 
        <div className='content-container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/projects/:id' element={<ProjectDisplay />} />
          <Route path='/experience' element={<Experience />} />
          <Route path='/resume' element={<Resume />} />
        </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
