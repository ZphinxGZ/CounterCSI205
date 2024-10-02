import Counter from './Counter/Counter'
import Timer from './Timer/Timer'
import Add from './Add/Add';

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Tempertures from './Tempertures/Tempertures';


function App() {

  return (
    <div className='border border-danger p-2 componentcontainer'>
      <h1 className='bg-dark text-light p-2 border border-danger rounded text-center'>React Component</h1>

      <div className='container contain01 text-center'>
        <div className='contain02'>
          <Counter name={'John'} value={10}/>
          <Timer />
        </div>
        <div className='contain03 text-center'>
          <Add aValue={10} bValue={20}/>
        </div>
      </div>
      
      <div className='container text-center container04'>
        <Tempertures initCelsius={30} name={'Kunakorn'}/>
      </div>

      <div className='footer-name'>
        <h2>นายคุณากร ขำเจริญ รหัส 66075070</h2>
      </div>

      
    </div>
  )
}

export default App
