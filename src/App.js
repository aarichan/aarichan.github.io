import './App.css';

import NavBar from './components/navbar/navbar.js'
import Home from './components/home/home.js'
import About from './components/about/about.js'
import Experience from './components/experience/experience.js';
import Projects from './components/projects/projects.js';

function App() {
  
  return (
    <>
      <NavBar/>
      <Home/>
      <About/>
      <Experience/>
      <Projects />
    </>
  );
}

export default App;