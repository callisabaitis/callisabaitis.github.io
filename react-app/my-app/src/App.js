import './App.css';
import Wave from 'react-wavify'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <span className="font">
          Calli Sabaitis
        </span>
      </header>
      <body className="App-body">
        link1
      </body>
      <Wave fill='white'
            options={{
              height: 50,
              amplitude: 20,
              speed: 0.25,
              points: 3,
            }}>
      </Wave>
    </div>
  );
}

export default App;
