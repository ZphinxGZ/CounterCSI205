import Counter from './Counter/Counter'
import Timer from './Timer/Timer'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


function App() {

  return (
    <div>
      
      <h1>Hello React</h1>
      <Counter name={'John'} value={10}/>
      <Timer />
      
    </div>
  )
}

export default App
