import 'bootstrap-icons/font/bootstrap-icons.css';
import 'remixicon/fonts/remixicon.css';
import'bootstrap/dist/css/bootstrap.min.css';
import'bootstrap/dist/js/bootstrap.min.js';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
// import Adoption from './components/Adoption';
// import Buddy from './components/Buddy';
import Footer from './components/footer/Footer.jsx';

function App() {
  return (
    <>
      <Header/>
      <Main />
      {/* <Adoption /> */}
      {/* <Buddy /> */}
      <Footer />
    </>
  );
}

export default App;
