import './App.css';
import Greeter from './components/Greeter';
import nameArray from './data.js'
// import Logo from './components/Logo'
// import Text from './components/Text'

// name and age are props of object
function App() {
  return (
   <div className="App">
     <h1 className="greeting">Hello React!</h1>
    { 
    nameArray.map(object => 
      <Greeter name={object.name} age={object.age} />
      )
    }
   </div>
  );
}

export default App;
