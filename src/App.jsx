import Navbar from './components/Navbar.jsx'
import Intro from './components/Intro.jsx'
import Divider from './components/Divider.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'

function App() {

  return (
    <>
      <div className="flex flex-col items-center justify-center px-4">
        <Navbar />
        <Intro />
        <Divider />
        <About />
        <Projects />
      </div>  
    </>
  );
}

export default App