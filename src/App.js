import NavBar from "./components/Nav/Navbar";
import Hero from "./components/Hero";
import SearchState from "./context/Search/SearchState";

function App() {
  return (
    <SearchState>
      <div className="">
        <div>
          <NavBar />
        </div>
        <div>
          <Hero />
        </div>
      </div>
    </SearchState>
  );
}

export default App;
