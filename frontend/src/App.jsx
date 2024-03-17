import Navbar from "./components/Navbar.jsx";
import Intro from "./components/Intro.jsx";
import Divider from "./components/Divider.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import ActiveSectionContextProvider from "./context/active-section-context.jsx";
import Skills from "./components/Skills.jsx";
import Experience from "./components/Experience.jsx";
import Contact from "./components/Contact.jsx";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer.jsx"

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
          <Skills />
          <Experience />
          <Contact />
          <Toaster position="top-right" />
          <Footer />
        </ActiveSectionContextProvider>
      </div>
    </>
  );
}

export default App;
