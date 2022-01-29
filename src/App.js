import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Resume from './components/Resume';

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route path="/React-Portfolio" element={<About />}></Route>
          <Route path="/React-Portfolio/about" element={<About />}></Route>
          <Route path="/React-Portfolio/portfolio" element={<Portfolio />}></Route>
          <Route path="/React-Portfolio/contact" element={<Contact />}></Route>
          <Route path="/React-Portfolio/resume" element={<Resume />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App;