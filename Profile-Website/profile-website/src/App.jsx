import Navbar from './components/navbar.jsx';
import AboutMe from './pages/aboutme.jsx';
import Gallery from './pages/gallery.jsx';
import Home from './pages/home.jsx';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home />
      <AboutMe />
      <Gallery />
    </div>
  );
}
export default App;