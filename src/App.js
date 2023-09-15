import { BrowserRouter as Router , Routes , Route} from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About'
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import RestDetails from "./components/RestDetails";

function App() {
  return (
    <Router>
      <Header/>
      <main>
      <Routes> 
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/restaurant/:id' element={<RestDetails/>}/>
      </Routes>
      </main>
      <Footer/>
    </Router>
  );
}

export default App;
