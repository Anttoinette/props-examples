import Greeting from './componenets/Greeting';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1> This Is Props! </h1>
       <Greeting name="Anttoinette" lastname="Henry" emoji="😌"/>
       <Greeting name="Dolce" lastname="Hair" emoji="🤑"/>
      </header>
    </div>
  );
}

export default App;
