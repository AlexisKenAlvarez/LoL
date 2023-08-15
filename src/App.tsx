
import Nav from "./components/Nav";
import About from "./views/About";
import Hero from "./views/Hero";
// import RoadmapSimple from "./views/RoadmapSimple";
import Roadmap from "./views/Roadmap";
import Tokenomics from "./views/Tokenomics";
import Tournament from "./views/Tournament";

const App = () => {
  return (
    <div className="w-full h-auto bg-bg relative z-10">
      <Nav />
      <Hero />
      <About />
      <Tournament />
      <Tokenomics />
      <Roadmap />
      {/* <RoadmapSimple /> */}
      {/* <div className="w-full h-[30vh] bg-bg"></div> */}
    </div>
  );
}

export default App;