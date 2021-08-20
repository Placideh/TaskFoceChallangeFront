import logo from './logo.svg';
import './App.css';
import Heading from './components/Heading';
import Cases from './components/Cases';
import Continent from './components/Continent';
import UserProfile from './components/UserProfile';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
function App() {
  return (
    <div className="container">
      <Heading/>
      <Cases/>
      <Continent/>
      <UserProfile/>
      <ContactUs/>
      <Footer/>
    </div>
  );
}

export default App;
