
import { Route } from 'react-router';
import './App.css';
import Home from './Components/Home';
import Add from './Components/AddEdit';
import List from './Components/List';

function App() {
  return (
    <div className="App">
  <Route exact path='/' component={Home}    /> 
   <Route exact path='(/AddUsers|/editContact)'  component={Add}  />
   <Route exact path='/users'  component={List}  />

    
    </div>
  );
}

export default App;
