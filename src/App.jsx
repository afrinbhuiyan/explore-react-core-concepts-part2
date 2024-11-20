
import './App.css'
import Counter from './Counter';
import Team from './Team';
import Users from './Users';
import Friends from './Friends';

function App() {
  
    function handleClick(){
      alert("button clicket");
    }

    function handleClick2(){
      alert("hey dont click button 🤖")
    }
     
    const addToFive = (num) => {
      alert (num + 5);
    }

  return (
    <>
      <h1>React core concepts part2</h1>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click 2</button>
      <button onClick={() => {alert("You don't click the button")}} >click 3</button>
      <button onClick={() => addToFive(3)} >Fourth button</button>
    </>
  )
}

export default App
