import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Page from "./components/Page";
import ContactInfo from './components/ContactInfo'
import { useLocation } from "react-router-dom";

function App() {
  const currentPage = useLocation().pathname;

  return (
    <div>
      <Header>
        <Nav currentPage={currentPage} />
      </Header>
      <main>
        <Page currentPage={currentPage} />
      </main>
      <ContactInfo />
      <Footer />
    </div>
  );
}

export default App;
