import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';

const info = {
  firstName : "Gayashan",
  lastName : "Wagachchi",
  age : 30,
  homeTown : "Tangalle"
}

function App() {
  return (
    <div className="App">
      <Header info={info}/>
      <h4>Header is loaded above.</h4>
      <h4>Footer is loaded below.</h4>
      <Footer data="Here is some data"/>
    </div>
  );
}

export default App;
