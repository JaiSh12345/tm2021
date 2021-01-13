import Header from './components/Header'
import Intro from './components/Intro'
import About from './components/About'
import Events from './components/Events'
import FAQ from './components/FAQ'
import Sponsors from './components/Sponsors'
import Contacts from './components/Contacts'
import Footer from './components/Footer'

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <About />
      <Events />
      <FAQ />
      <Sponsors />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
