import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ThemeSwitcher from "./components/ThemeSwitcher";
import NotFound from "./components/NotFound";

const App = () => {
  const isNotFound = window.location.pathname !== "/";

  if (isNotFound) {
    return (
      <div className="h-screen w-full overflow-hidden">
        <div className="fixed right-5 top-5 z-[100] sm:right-6 sm:top-6">
          <ThemeSwitcher />
        </div>

        <NotFound />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Education />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;