import './App.css';
import { Provider } from 'react-redux';
import store from './Store.js'
import Heading from './components/Heading';
import Cases from './components/Cases';
import Continent from './components/Continent';
import UserProfile from './components/UserProfile';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <Heading/>
        <Cases/>
        <Continent/>
        <UserProfile/>
        <ContactUs/>
        <Footer/>
      </div>
  </Provider>
  );
}

export default App;
