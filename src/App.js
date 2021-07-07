import Header from './components/Header'
import NavBar from './components/Nav/Navbar'
import Hero from './components/Hero'
import LockerOverview from './components/LockerOverview'

function App() {
  return (
    <div className="">
      <div>
     <NavBar />
      </div>
      <div>
        <Hero />
      </div>
      <div>
        <LockerOverview />
      </div>
    </div>
  );
}

export default App;
