import './App.css';
import Clock from './components/Clock';
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
      <p>Header is loaded above.</p>
      <Clock />
      <p>Footer is loaded below.</p>
      <Footer data="Here is some data"/>
    </div>
  );
}

export default App;
