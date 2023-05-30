import React from 'react';
import './App.css';
import {NewComponent} from "./components/NewComponent";
import {Button} from "./components/Button";

function App() {
    const showSubscriber = (name: string, age: number) => {
        console.log(name, age)
    }

    const showStupidButton = () => {
        console.log('I\'m stupid button');
    }



  return (
    <div className="App">
      <NewComponent />
        {/*<button onClick={(event) => showSubscriber('Vasya')}>MyYouTubeChannel</button>*/}
        {/*<button onClick={(event) => showSubscriber('Ivan')}>MyYouTubeChannel</button>*/}
        <Button callBack={() => showSubscriber('Vasya', 21)} title={'My button'}/>
        <Button callBack={() => showSubscriber('Ivan', 18)} title={'Your button'}/>
        <Button callBack={showStupidButton} title={'Stupid button'}/>

    </div>
  );
}

export default App;
