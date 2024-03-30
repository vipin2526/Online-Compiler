import 'bootstrap/dist/css/bootstrap.min.css';
import './components/css/homePage.css'
import Header from './components/Header';
// import Footer from './components/Footer';
import Compiler from './components/Compiler/Compiler'


function App() {
  return (
    <div className='mainPage'>
      <Header />
      <Compiler />
      {/* <Footer /> */}
    </div>
  );
}

export default App;