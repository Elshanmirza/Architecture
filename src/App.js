import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar/Navbar.js';
import Home from './components/Home';
import Aboutus from './components/Aboutus';
import Team from './components/Team';
import Contactus from './components/Contactus';
import Footer from './components/Footer';

function App() {
  return (
    <> {/* React fragment*/}
      <Navbar />
      <Home />
      <Aboutus />
      <Team />
      <Contactus />
      <Footer />
    </>
  );
}

export default App;
