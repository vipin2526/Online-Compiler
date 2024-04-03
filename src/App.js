import 'bootstrap/dist/css/bootstrap.min.css';
import './components/css/homePage.css'
import Header from './components/Header';
// import Footer from './components/Footer';
import Compiler from './components/Compiler/Compiler'
import Documentation from './components/Documentation';



function App() {
  return (
    <div className='mainPage'>
      <Header />
      <Compiler />
      <Documentation />
    </div>
  );
}

export default App;