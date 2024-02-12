import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import ContactInfo from './components/ContactInfo/ContactInfo';
import Footer from './components/Footer/Footer';
import ContactMe from './components/ContactMe/ContactMe';
import ErrorPage from './components/ErrorPage/ErrorPage';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Portfolio />
      <ContactMe />
      <ContactInfo />
      <ErrorPage />
      <Footer />
    </div>
  )
}

export default App
