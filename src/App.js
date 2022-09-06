import logo from './logo.svg';
import './App.css';
import Display from './components/display';
import Button from './components/button';

import{useState} from 'react'
function App()



{
  const[count,setCount] = useState(0);
  const [name ,setName] = useState("Lenie")

  
const changeName = ()=>{
setName("Dine")
}
const increment = ()=>{
let sum = count +1 ;
setCount(sum);}

const decrement = ()=>{
  if (count==0){
    setCount(0)
  }else{
  let sub = count -1 ;
  setCount(sub);
}
}
const changeNumber = ()=>{
  setCount(5)
}

  return (
    <div className="App">
      <Display count={count}/>

      <Button increment={increment} decrement={decrement}/>
      <h1>{name}</h1>
      <h1>{count}</h1>

      <button onClick={changeName}>SET NAME</button>
      <button onClick={changeNumber}>set Count</button>
        
    </div>
  )
  }

export default App;
