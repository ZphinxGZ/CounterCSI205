import Counter from './Counter/Counter'
import Timer from './Timer/Timer'
import Add from './Add/Add';

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


function App() {

  return (
    <div>
      
      <h1>Hello React</h1>
      <Counter name={'John'} value={10}/>
      <Timer />
      <Add aValue={10} bValue={20}/>
    </div>
  )
}

export default App
