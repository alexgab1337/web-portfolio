import Navbar from './components/Navbar.jsx'
import Intro from './components/Intro.jsx'
import Divider from './components/Divider.jsx'

function App() {

  return (
    <>
      <div className="flex flex-col items-center justify-center px-4">
        <Navbar />
        <Intro />
        <Divider />
      </div>  
    </>
  );
}

export default App