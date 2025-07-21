import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar'
import Herosection from './components/heroSection';
import Footer from './components/footer';
import SecondYear from './components/secondYear';
import FirstYear from './components/firstYear';
import ThirdYear from './components/thirdYear';
import Home from './pages/home';
import About from './pages/about';
import Books from './pages/books';
{/*import PYQ from './pages/pyq';
import Lectures from './pages/lectures';*/}



function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <div className="min-h-screen bg-black flex flex-col font-poppins">
              <Herosection />
              <FirstYear />
              <SecondYear />
              <ThirdYear />
              <Footer />
            </div>
          }
        />
        <Route path="/about" element={<About />} />
         <Route path="/books" element={<Books />} />
        {/*<Route path="/pyq" element={<PYQ />} />
        <Route path="/lectures" element={<Lectures />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
