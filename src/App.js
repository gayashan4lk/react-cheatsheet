import './App.css';
import Button from './components/Button';
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
      <Clock />
      <Button />
      <Footer data="Here is some data"/>
    </div>
  );
}

export default App;
