import React, {useState} from 'react';
import './App.css';
import {NewComponent} from "./components/NewComponent";
import {Button} from "./components/Button";

function App() {

    let [counter, setCounter] = useState(0);

    const count = () => {
        setCounter(++counter);
        console.log(counter);
    }

    const clearCounter = () => {
        setCounter(0);
    }
    const showSubscriber = (name: string, age: number) => {
        console.log(name, age)
    }



  return (
    <div className="App">
      <NewComponent />
        <Button callBack={() => showSubscriber('Vasya', 21)} title={'My button'}/>
        <Button callBack={() => showSubscriber('Ivan', 18)} title={'Your button'}/>
        <div>{counter}</div>
        <Button callBack={count} title={'Count'}/>
        <Button callBack={clearCounter} title={'Clear'}/>

    </div>
  );
}

export default App;
