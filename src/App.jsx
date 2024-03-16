import Navbar from "./components/Navbar.jsx";
import Intro from "./components/Intro.jsx";
import Divider from "./components/Divider.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import ActiveSectionContextProvider from "./context/active-section-context.jsx";

//TODO custom scroll + section tracker +

function App() {
  return (
    <>
      <div className="flex flex-col items-center justify-center px-4">
        <ActiveSectionContextProvider>
          <Navbar />
          <Intro />
          <Divider />
          <About />
          <Projects />
        </ActiveSectionContextProvider>
      </div>
    </>
  );
}

export default App;
