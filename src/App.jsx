import Topbar from './components/topbar/Topbar';
import Intro from './components/intro/Intro';
import Portfolio from './components/portfolio/Portfolio';
import Work from './components/works/Work';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import './app.scss';

function App() {
  return (
    <div className="App">
      <Topbar />
      <div className="section">
        good morning
        <Intro />
        <Portfolio />
        <Work />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;
