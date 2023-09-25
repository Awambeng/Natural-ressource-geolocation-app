import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Hero from './components/Hero/Hero';
import Resource from './components/Resource/Resource';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import Footer from './components/Footer/Footer';
import './app.css';

function Dashboard() {
  return (
    <div className="App">
      <Navbar />
      <Home /> 
      <Hero />
      <Resource />
      <About />
      <Blog />
      <Footer /> 
    </div>
  );
}

export default Dashboard;
