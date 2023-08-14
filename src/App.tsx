import Nav from "./components/Nav";
import About from "./views/About";
import Hero from "./views/Hero";

const App = () => {
  return (
    <div className="w-full h-auto bg-bg relative z-10">
      <Nav />
      <Hero />
      <About />
      <div className="w-full h-screen bg-bg"></div>
    </div>
  );
}

export default App;